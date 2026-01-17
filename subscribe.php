<?php
/**
 * THE BLUEPRINT - Kit Bridge (PHP)
 * For Namecheap Shared Hosting (cPanel)
 *
 * Put this file in /public_html/subscribe.php
 * Keep API key server-side only.
 */

// --- CONFIGURATION ---
// 1) In Kit: Settings -> Developer / API -> copy your API Key (NOT secret)
$KIT_API_KEY = 'KIT_API_KEY_HERE';

// 2) In Kit: Grow -> Landing Pages & Forms -> open your form
// The URL has /forms/1234567/...  => that number is the FORM_ID
$FORM_ID = 'FORM_ID_HERE';

// --- HEADERS ---
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Preflight (for safety)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  echo json_encode(["message" => "ok"]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["message" => "Method not allowed"]);
  exit;
}

// --- INPUT ---
$raw = file_get_contents("php://input");
$input = json_decode($raw, true);

$email = isset($input['email']) ? trim($input['email']) : '';
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["message" => "Invalid email format"]);
  exit;
}

// --- KIT API CALL ---
$url = "https://api.convertkit.com/v3/forms/{$FORM_ID}/subscribe";
$payload = json_encode([
  "api_key" => $KIT_API_KEY,
  "email"   => $email
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Content-Type: application/json",
  "Content-Length: " . strlen($payload)
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// --- RESPONSE HANDLING ---
if ($response === false) {
  http_response_code(500);
  echo json_encode(["message" => "Server curl error", "details" => $curlError]);
  exit;
}

// ConvertKit often returns 200/201 on success
if ($httpCode >= 200 && $httpCode < 300) {
  echo json_encode(["message" => "ok"]);
  exit;
}

// If it failed, pass a safe error message back
http_response_code(500);
echo json_encode([
  "message" => "Subscription failed",
  "status"  => $httpCode,
  "details" => $response
]);
exit;