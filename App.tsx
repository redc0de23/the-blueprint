import React, { useState, useRef } from 'react';
import { ShieldCheck, LineChart, Target, AlertCircle, Mail, ArrowRight, User, CheckCircle2, AlertTriangle, Fingerprint, Lock, Shield, Activity, ChevronRight } from 'lucide-react';

// --- Sub-components ---

const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => (
  <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
    </div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-[10px] font-bold tracking-[0.3em] text-[#d4af37] uppercase bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-full">
        <Lock className="w-3 h-3" /> Restricted Protocol Initiation
      </div>
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.95]">
        The House Doesn't Guess.<br />
        <span className="text-emerald-500">Neither Should You.</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
        Deploy a private, data-driven framework to eliminate emotional variance. Restore institutional structure to your decision-making.
      </p>
      <button 
        onClick={onCtaClick}
        className="inline-flex items-center px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all bg-emerald-gradient rounded-xl shadow-2xl hover:brightness-110 active:scale-[0.98] group"
      >
        Adopt Operating Standard
        <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </section>
);

const QualificationBullets: React.FC = () => (
  <section className="pb-24 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { text: "Chronic Decision Variance", icon: Activity },
          { text: "Absent Logic Framework", icon: Fingerprint },
          { text: "Requirement for Data-Centricity", icon: Target }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-5 bg-zinc-900/10 border border-zinc-800/20 rounded-xl">
            <item.icon className="w-4 h-4 text-emerald-800/60 shrink-0" />
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] leading-none">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudySection: React.FC = () => (
  <section className="py-24 bg-zinc-950 px-6 border-y border-zinc-900">
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <div className="inline-block px-3 py-1 mb-8 text-[9px] font-bold tracking-widest text-zinc-600 uppercase border border-zinc-800 rounded">
          Observation Report: Subject J.M.
        </div>
        <div className="space-y-6 text-zinc-300 text-xl md:text-2xl leading-relaxed font-extralight max-w-2xl italic">
          <p>
            "Technical proficiency repeatedly neutralized by behavioral variance. Intelligence present; framework absent."
          </p>
          <p>
            "The variable was not luck, but a repeatable operating standard. Cyclical loss-chasing is a symptom of structural failure."
          </p>
          <p className="text-emerald-500 font-medium not-italic text-[10px] md:text-xs tracking-[0.2em] uppercase pt-6">
            The Blueprint exists to be that standard.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SystemComponents: React.FC = () => {
  const components = [
    {
      title: "Probability Filters",
      description: "Neutralize speculation. Isolate market inefficiencies via direct data streams.",
      icon: LineChart
    },
    {
      title: "Execution Guardrails",
      description: "Neutralize emotional tilt. Hard-coded limits to maintain bankroll integrity.",
      icon: ShieldCheck
    },
    {
      title: "Professional Logic",
      description: "Decode market sentiment. Distinguish public noise from professional logic.",
      icon: Target
    },
    {
      title: "Decision Sovereignty",
      description: "Non-commercial protocol. You maintain absolute decision sovereignty.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">The Operating Protocol</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-light">Repeatable logic for individuals who refuse to guess.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {components.map((v, i) => (
            <div key={i} className="group p-10 bg-zinc-900/10 border border-zinc-800/40 rounded-[2.5rem] hover:border-emerald-500/20 transition-all duration-500">
              <v.icon className="w-6 h-6 text-emerald-700 mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-white font-bold mb-4 uppercase tracking-[0.25em] text-[11px]">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OperatingStandards: React.FC = () => (
  <section className="py-24 bg-zinc-950 px-6 border-y border-zinc-900">
    <div className="max-w-3xl mx-auto text-center">
      <Shield className="w-8 h-8 text-[#d4af37]/20 mx-auto mb-8" />
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 uppercase tracking-[0.3em]">Operating Standards</h2>
      <div className="space-y-4 text-zinc-400 font-light text-base md:text-lg max-w-2xl mx-auto tracking-tight">
        <p>No commercial affiliations. No affiliate commissions.</p>
        <p>The Blueprint is a private educational protocol.</p>
        <p>You manage risk. We provide the framework.</p>
      </div>
      <div className="mt-16 inline-flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40">
        {["Direct Adoption", "Full Sovereignty", "Zero Conflict"].map((text, i) => (
          <span key={i} className="text-[8px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
            <div className="w-1 h-1 bg-white rounded-full" /> {text}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const EmailForm: React.FC<{ formRef: React.RefObject<HTMLDivElement> }> = ({ formRef }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/subscribe.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.message === 'ok') {
        setSubmitted(true);
      } else {
        setError(data.message || 'Verification failed. Protocol initialization denied.');
      }
    } catch (err) {
      setError('Connection interrupted. Retry protocol initialization.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={formRef} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-[3.5rem] p-8 md:p-20 shadow-[0_0_100px_rgba(0,0,0,0.7)] backdrop-blur-md">
          {!submitted ? (
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">Initialize Enrollment</h2>
                <p className="text-zinc-500 mb-12 leading-relaxed font-light text-lg">
                  Adopt the operating standard. Transition from player to operator. 
                  Enrollment is immediate and sovereign.
                </p>
                
                <div className="space-y-8">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4 pb-2 border-b border-zinc-800">What Happens Next</div>
                  {[
                    "Immediate Protocol Delivery to Provided Address",
                    "Institutional Decision-Logic Framework Onboarding",
                    "One-Click Exit. Absolute Sovereignty over your Data"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                      <ChevronRight className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full max-w-md lg:mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Institutional Email Address"
                      className="w-full px-8 py-6 bg-black border border-zinc-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all text-white placeholder-zinc-800 disabled:opacity-50 text-sm font-medium tracking-tight"
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 bg-emerald-gradient text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-2xl transition-all hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-3 shadow-2xl"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Finalize Enrollment <ArrowRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </form>
                {error && (
                  <div className="mt-6 p-4 bg-red-500/5 border border-red-500/10 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
                    <AlertTriangle className="w-3 h-3 text-red-900 shrink-0" />
                    <p className="text-[9px] text-red-600 font-black uppercase tracking-widest">{error}</p>
                  </div>
                )}
                <div className="mt-10 flex items-center justify-center gap-3 text-[8px] text-zinc-700 font-bold uppercase tracking-[0.5em]">
                   Sovereign Enrollment • Non-Commercial Protocol
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 animate-in fade-in zoom-in-95 duration-700">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-10" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter uppercase">Enrollment Confirmed</h2>
              <p className="text-zinc-500 max-w-sm mx-auto font-light leading-relaxed text-lg">
                The protocol dispatch confirmed. Initialize the standard immediately upon receipt.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-24 px-6 border-t border-zinc-900 bg-black">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
          <div className="w-6 h-6 bg-emerald-gradient rounded-sm"></div>
          <span className="font-bold tracking-tighter text-white text-sm">THE BLUEPRINT</span>
        </div>
        <p className="text-zinc-800 text-[9px] font-bold uppercase tracking-[0.4em] max-w-[250px] leading-relaxed">
          The definitive operating framework for individuals who refuse to guess.
        </p>
      </div>
      <div className="flex gap-12 text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em]">
        <a href="/privacy.html" className="hover:text-white transition-colors">Privacy</a>
        <a href="/risk-protocol.html" className="hover:text-white transition-colors">Risk Protocol</a>
        <a href="/terms.html" className="hover:text-white transition-colors">Terms</a>
      </div>
    </div>
    <div className="mt-24 text-[8px] text-zinc-900 font-bold uppercase tracking-[0.6em] text-center">
      &copy; {new Date().getFullYear()} Blueprint Protocol Group (BPG).
    </div>
  </footer>
);

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-400 font-['Inter']">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-3xl px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 bg-emerald-gradient rounded-md flex items-center justify-center font-black text-black text-[9px] shadow-lg shadow-emerald-950/40">BP</div>
            <span className="font-bold tracking-tighter text-white text-xs">THE BLUEPRINT</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="text-[8px] font-black tracking-[0.5em] text-emerald-700 hover:text-emerald-400 transition-all uppercase"
          >
            Enter Protocol
          </button>
        </div>
      </nav>

      <main>
        <Hero onCtaClick={scrollToForm} />
        <QualificationBullets />
        <CaseStudySection />
        <SystemComponents />
        <OperatingStandards />
        <EmailForm formRef={formRef} />
      </main>

      <Footer />
    </div>
  );
}