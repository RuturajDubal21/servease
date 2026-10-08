import React, { useState } from 'react';
import { Cpu, ShieldAlert, Wrench, CheckCircle2, PackageCheck, UserCheck, ArrowRight, Sparkles, RefreshCw, AlertTriangle, Lightbulb } from 'lucide-react';

const mockDiagnosticScenarios = [
  {
    id: 'sc1',
    category: 'AC Repair',
    symptom: 'AC blowing warm air & humming sound',
    diagnosis: 'Possible Capacitor Failure or Low Refrigerant Gas Pressure',
    severity: 'Medium',
    diySteps: [
      { step: 1, text: 'Switch off the AC mains power switch to prevent electrical surges.' },
      { step: 2, text: 'Inspect and clean the outdoor unit air intake vents of debris or leaves.' },
      { step: 3, text: 'Check if the indoor air filter is clogged; rinse with water and dry completely.' }
    ],
    diySafe: false,
    predictedParts: [
      { name: '45 MFD Dual Run Capacitor (440V)', estPrice: '₹450', reserved: true },
      { name: 'R32 Eco Refrigerant Gas Canister', estPrice: '₹850', reserved: true },
      { name: 'HVAC Manifold Gauge Hose Set', estPrice: 'Tool Included', reserved: true }
    ],
    suggestedProviderId: 'p6'
  },
  {
    id: 'sc2',
    category: 'Electrician',
    symptom: 'Sparking wall outlet & tripped MCB breaker',
    diagnosis: 'Short Circuit / Overloaded Terminal Connection',
    severity: 'High - Emergency',
    diySteps: [
      { step: 1, text: 'DANGER: Do NOT touch switchboard with bare or wet hands.' },
      { step: 2, text: 'Locate Main DB Panel and keep the faulty MCB switched OFF.' },
      { step: 3, text: 'Unplug high-wattage appliances (Heater, Iron, AC) from that line.' }
    ],
    diySafe: false,
    predictedParts: [
      { name: '16A Heavy Duty Modular Socket & Switch', estPrice: '₹220', reserved: true },
      { name: 'C16 Single Pole MCB Circuit Breaker', estPrice: '₹310', reserved: true },
      { name: '1100V Flame Retardant Copper Wire (1.5 sq mm)', estPrice: '₹180', reserved: true }
    ],
    suggestedProviderId: 'p1'
  },
  {
    id: 'sc3',
    category: 'Plumber',
    symptom: 'Water leaking under kitchen sink pipe joint',
    diagnosis: 'Worn Washers & Thread Seal Degradation',
    severity: 'Low - DIY Friendly',
    diySteps: [
      { step: 1, text: 'Turn off the under-sink angle valve counter-clockwise.' },
      { step: 2, text: 'Place a small bucket or towel directly underneath the coupling nut.' },
      { step: 3, text: 'Wrap Teflon thread sealing tape 4-5 times clockwise around threads.' }
    ],
    diySafe: true,
    predictedParts: [
      { name: 'PTFE Teflon Thread Seal Tape (12mm)', estPrice: '₹35', reserved: true },
      { name: 'Rubber O-Ring Gasket Seal Kit', estPrice: '₹60', reserved: true },
      { name: 'Flexi PVC Sink Drain Hose (32mm)', estPrice: '₹180', reserved: true }
    ],
    suggestedProviderId: 'p2'
  }
];

export default function ProblemEscalationEngine({ onBookProviderWithDiagnosis }) {
  const [selectedScenario, setSelectedScenario] = useState(mockDiagnosticScenarios[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [escalated, setEscalated] = useState(false);

  const handleRunAiDiagnosis = (scenario) => {
    setIsAnalyzing(true);
    setEscalated(false);
    setTimeout(() => {
      setSelectedScenario(scenario);
      setIsAnalyzing(false);
    }, 800);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customPrompt) return;
    setIsAnalyzing(true);
    setEscalated(false);

    setTimeout(() => {
      const generated = {
        id: 'sc_custom_' + Date.now(),
        category: 'Custom AI Diagnosis',
        symptom: customPrompt,
        diagnosis: `AI Analysis for "${customPrompt}": Identified probable component wear and electrical/mechanical impedance issue.`,
        severity: 'Moderate',
        diySteps: [
          { step: 1, text: 'Isolate main power/water supply valves prior to physical inspection.' },
          { step: 2, text: 'Visually check external connections for loose fittings or burnt odors.' },
          { step: 3, text: 'Keep area dry and clean for technician arrival.' }
        ],
        diySafe: false,
        predictedParts: [
          { name: 'Standard Replacement Component Assembly', estPrice: '₹350 - ₹750', reserved: true },
          { name: 'Precision Diagnostic Multimeter / Sensor', estPrice: 'Pre-calibrated Tool', reserved: true }
        ],
        suggestedProviderId: 'p1'
      };
      setSelectedScenario(generated);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <section id="ai-escalation" className="py-20 bg-gradient-to-b from-[#071939] via-[#0B2D6B] to-[#0D3478] text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 text-[#F4C430] border border-[#F4C430]/40 text-xs font-extrabold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#F4C430]" /> Next-Gen AI Feature
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Problem Escalation Engine
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg">
            AI diagnoses the issue, guides safe DIY fixes, predicts required parts & tools, and pre-reserves inventory for your matched expert before arrival.
          </p>
        </div>

        {/* Diagnostic Input Box */}
        <div className="bg-blue-950/80 rounded-3xl p-6 sm:p-8 border border-blue-800/80 shadow-2xl mb-12 backdrop-blur-md">
          <div className="space-y-4">
            <label className="text-xs font-bold text-[#F4C430] uppercase tracking-wider block">
              Step 1: Describe your issue or pick a common symptom
            </label>

            <form onSubmit={handleCustomSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. My AC compressor is making clicking noise and not cooling..."
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="w-full bg-blue-900/80 text-white placeholder-blue-300/60 px-5 py-3.5 rounded-2xl border border-blue-700 focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-sm"
              />
              <button
                type="submit"
                disabled={isAnalyzing}
                className="px-6 py-3.5 rounded-2xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-sm hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-yellow-500/20"
              >
                <Sparkles className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                <span>{isAnalyzing ? 'Analyzing Issue...' : 'Run AI Diagnostic'}</span>
              </button>
            </form>

            {/* Quick Sample Selector Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-blue-300 font-semibold">Try sample scenarios:</span>
              {mockDiagnosticScenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleRunAiDiagnosis(sc)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all border ${
                    selectedScenario.id === sc.id
                      ? 'bg-[#F4C430] text-[#0B2D6B] border-[#F4C430]'
                      : 'bg-blue-900/60 text-blue-200 border-blue-700/60 hover:bg-blue-800'
                  }`}
                >
                  {sc.category}: {sc.symptom}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Output Results Grid */}
        {selectedScenario && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: AI Diagnosis & DIY Troubleshooting Guide */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Diagnosis Summary Card */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 border-2 border-yellow-400 shadow-2xl space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0B2D6B] flex items-center justify-center font-bold">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0B2D6B] block">AI Diagnostic Report</span>
                      <h3 className="text-lg font-black text-slate-900">{selectedScenario.diagnosis}</h3>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase border ${
                    selectedScenario.severity.includes('Emergency') || selectedScenario.severity.includes('High')
                      ? 'bg-rose-100 text-rose-800 border-rose-300'
                      : 'bg-amber-100 text-amber-900 border-amber-300'
                  }`}>
                    {selectedScenario.severity}
                  </span>
                </div>

                <div className="text-xs text-slate-600">
                  <strong>Reported Symptom:</strong> "{selectedScenario.symptom}"
                </div>

                {/* Step-by-Step Safe DIY Fixes */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-extrabold text-[#0B2D6B] flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Safe DIY Troubleshooting Steps (Step-by-Step)
                  </h4>

                  <div className="space-y-2">
                    {selectedScenario.diySteps.map((step) => (
                      <div key={step.step} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0B2D6B] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                          {step.step}
                        </span>
                        <span className="text-slate-700 leading-relaxed font-medium mt-0.5">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Predicted Parts & Pre-Reservation Escalation */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Predicted Parts & Tools Card */}
              <div className="bg-blue-950/90 rounded-3xl p-8 border border-blue-800/90 shadow-2xl space-y-6">
                
                <div className="flex items-center gap-3">
                  <PackageCheck className="w-6 h-6 text-[#F4C430]" />
                  <div>
                    <h4 className="text-lg font-black text-white">Predicted Parts & Tools</h4>
                    <p className="text-xs text-blue-200">Pre-reserved at local hardware hub</p>
                  </div>
                </div>

                {/* Parts List */}
                <div className="space-y-3">
                  {selectedScenario.predictedParts.map((part, idx) => (
                    <div key={idx} className="p-3.5 bg-blue-900/60 rounded-2xl border border-blue-700/60 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white">{part.name}</div>
                        <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Pre-reserved at partner store
                        </div>
                      </div>
                      <span className="font-mono font-black text-[#F4C430]">{part.estPrice}</span>
                    </div>
                  ))}
                </div>

                {/* Expert Match Escalation Action */}
                <div className="pt-4 border-t border-blue-800/80 space-y-4">
                  {escalated ? (
                    <div className="bg-emerald-950/90 border border-emerald-500 text-emerald-200 rounded-2xl p-5 text-center space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                      <h5 className="font-bold text-white text-base">Expert Matched & Parts Reserved!</h5>
                      <p className="text-xs text-emerald-300">
                        The verified technician has received your complete AI Diagnostic Report and pre-reserved parts list.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="text-xs text-blue-200 leading-relaxed">
                        If DIY does not resolve the issue, escalate to a verified expert who receives your full diagnosis and brings the pre-reserved parts directly to your door.
                      </div>

                      <button
                        onClick={() => {
                          setEscalated(true);
                          if (onBookProviderWithDiagnosis) {
                            onBookProviderWithDiagnosis(selectedScenario);
                          }
                        }}
                        className="w-full py-4 rounded-2xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-sm hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2"
                      >
                        <UserCheck className="w-5 h-5" />
                        <span>Escalate to Verified Expert with Pre-Reserved Parts</span>
                      </button>
                    </>
                  )}
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
