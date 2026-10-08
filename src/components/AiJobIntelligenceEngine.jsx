import React, { useState } from 'react';
import { Camera, Upload, Sparkles, CheckCircle2, AlertTriangle, Wrench, Package, Truck, ArrowRight, User, ShieldCheck, Clock, Check, X, Shield, Cpu, ExternalLink } from 'lucide-react';

export default function AiJobIntelligenceEngine() {
  const [photoSelected, setPhotoSelected] = useState(false);
  const [previewImage, setPreviewImage] = useState('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400');
  const [description, setDescription] = useState('My bathroom tap is continuously leaking from the spindle top.');
  const [analyzing, setAnalyzing] = useState(false);
  const [diyAttemptCount, setDiyAttemptCount] = useState({ tightened: true, supplyChecked: true, leakStopped: false });
  const [showJobCardModal, setShowJobCardModal] = useState(false);

  // AI Diagnostic State
  const [aiResult, setAiResult] = useState({
    issueTitle: 'Damaged Tap Cartridge',
    confidence: '91%',
    severity: 'Medium',
    diyPossible: true,
    diyTime: '10–15 minutes',
    diyDifficulty: 'Easy',
    likelyParts: [
      { name: '🔩 Tap Cartridge (Quarter Turn Ceramic Disc)', qty: 1, cost: '₹120 - ₹220', status: 'Likely Required' },
      { name: '🔧 Rubber O-Ring Gasket Seals', qty: 2, cost: '₹30', status: 'Likely Required' },
      { name: '🧴 PTFE Thread Sealing Tape (12mm)', qty: 1, cost: '₹25', status: 'Likely Required' }
    ],
    possiblyRequired: [
      { name: 'Flexi Braided Water Inlet Hose (1/2")', qty: 1, cost: '₹140', status: 'Possibly Required' }
    ],
    onlyIfDamaged: [
      { name: 'Solid Brass Tap Spindle Core', qty: 1, cost: '₹350', status: 'Only If Damaged' }
    ],
    totalPartsCost: '₹150 – ₹350',
    expertInventory: {
      inStock: true,
      expertName: 'Amit Kumar Verma (Verified Master Plumber)',
      inventoryItem: 'Tap Cartridge (Model C-14) in Service Van ✓'
    }
  });

  const handleSimulateUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setPhotoSelected(true);
    } else {
      setPhotoSelected(true);
    }
  };

  const handleRunAiDiagnostic = (e) => {
    if (e) e.preventDefault();
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 1000);
  };

  return (
    <section id="ai-job-intelligence" className="py-20 bg-gradient-to-b from-[#071939] via-[#0B2D6B] to-[#0D3478] text-white relative overflow-hidden">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 text-[#F4C430] border border-[#F4C430]/40 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F4C430]" /> Next-Gen AI Innovation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            AI Visual Diagnosis & Job Intelligence Engine
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg">
            Show your issue, get instant AI diagnosis, safe DIY fixes, predicted parts, and match with an expert who receives a complete <strong>Job Intelligence Card</strong> with pre-reserved parts!
          </p>
        </div>

        {/* Workflow Comparison Banner: ServEase Single Visit vs Old Slow Flow */}
        <div className="mb-14 bg-blue-950/90 rounded-3xl p-6 sm:p-8 border border-blue-800/80 shadow-2xl space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#F4C430] text-center sm:text-left">
            ⚡ Why ServEase Prevents Wasted Trips & Multiple Visits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* ServEase Way */}
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
              <span className="font-extrabold text-emerald-400 uppercase tracking-wider block">
                🚀 ServEase 1-Visit Flow
              </span>
              <p className="text-emerald-100 leading-relaxed font-semibold">
                AI Diagnosis → Parts Prediction → Expert Matching → Parts Pre-Reserved → Expert Arrives Prepared → Repair Completed in 1 Visit!
              </p>
            </div>

            {/* Traditional Way */}
            <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 space-y-2">
              <span className="font-extrabold text-rose-400 uppercase tracking-wider block">
                ❌ Traditional Slow Flow
              </span>
              <p className="text-rose-200 leading-relaxed">
                Expert arrives unequipped → diagnoses on site → leaves for hardware shop → buys parts → comes back 3 hours later (Multiple visits & lost time).
              </p>
            </div>

          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1 & 2: User Inputs Photo/Video & Symptom */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-blue-950/90 rounded-3xl p-6 sm:p-8 border border-blue-800 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-black">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">📸 Show the Problem</h3>
                  <p className="text-xs text-blue-200">Upload photo/video or describe symptoms</p>
                </div>
              </div>

              {/* Photo Upload Dropzone Box */}
              <div className="relative border-2 border-dashed border-blue-700/80 rounded-2xl p-6 text-center hover:border-[#F4C430] transition-colors bg-blue-900/40">
                {photoSelected ? (
                  <div className="space-y-3">
                    <img src={previewImage} alt="Problem Tap Leak" className="w-full h-44 object-cover rounded-xl border border-blue-600 shadow-md" />
                    <span className="text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Tap Image Analyzed by AI Computer Vision
                    </span>
                  </div>
                ) : (
                  <label className="cursor-pointer space-y-3 block">
                    <Camera className="w-10 h-10 text-[#F4C430] mx-auto animate-bounce" />
                    <div className="text-xs font-bold text-white">Click to Upload Photo / Video of Leak</div>
                    <div className="text-[11px] text-blue-300">Supports JPG, PNG, MP4 (Max 25MB)</div>
                    <input type="file" accept="image/*,video/*" onChange={handleSimulateUpload} className="hidden" />
                  </label>
                )}
              </div>

              {/* Symptom Input Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-200 block">Symptom Description</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-blue-900/80 text-white placeholder-blue-300/60 p-3.5 rounded-xl border border-blue-700 text-xs focus:ring-2 focus:ring-[#F4C430] outline-none"
                ></textarea>
              </div>

              <button
                onClick={handleRunAiDiagnostic}
                disabled={analyzing}
                className="w-full py-4 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold text-xs sm:text-sm hover:bg-yellow-400 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className={`w-4 h-4 ${analyzing ? 'animate-spin' : ''}`} />
                <span>{analyzing ? 'AI Computer Vision Analyzing Image...' : 'Analyze Image & Predict Parts'}</span>
              </button>

            </div>

          </div>

          {/* Step 2, 3, 4: AI Analysis Output, DIY Steps & Parts Prediction */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-yellow-400 shadow-2xl space-y-6">
              
              {/* AI Detection Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-[#0B2D6B] block">
                    🧠 AI Problem Identification
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Detected Issue: <span className="text-[#0B2D6B]">{aiResult.issueTitle}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-3 py-1 bg-blue-100 text-[#0B2D6B] font-black rounded-full border border-blue-200">
                    Confidence: {aiResult.confidence}
                  </span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-full border border-amber-300">
                    Severity: {aiResult.severity}
                  </span>
                </div>
              </div>

              {/* Step 3: DIY Assessment */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-emerald-600" />
                    🟢 DIY Assessment: <strong>Possible</strong>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600">Est. Time: {aiResult.diyTime} • {aiResult.diyDifficulty}</span>
                </div>

                {/* Interactive DIY Attempt Checklist */}
                <div className="text-xs space-y-2 pt-1 border-t border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium">Record your DIY troubleshooting results:</div>
                  <label className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                    <span className="font-semibold text-slate-700">Tightened coupling nut & spindle handle</span>
                    <input
                      type="checkbox"
                      checked={diyAttemptCount.tightened}
                      onChange={(e) => setDiyAttemptCount({ ...diyAttemptCount, tightened: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                    <span className="font-semibold text-slate-700">Checked main angle valve water pressure</span>
                    <input
                      type="checkbox"
                      checked={diyAttemptCount.supplyChecked}
                      onChange={(e) => setDiyAttemptCount({ ...diyAttemptCount, supplyChecked: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600"
                    />
                  </label>

                  <div className="p-2 bg-rose-50 text-rose-800 rounded-lg border border-rose-200 font-bold flex items-center justify-between">
                    <span>❌ Leakage Continues (DIY Failed → Escalating to Professional)</span>
                    <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded">Auto Escalate</span>
                  </div>
                </div>
              </div>

              {/* Step 4: Categorized Parts Prediction */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0B2D6B]" />
                    📦 AI Predicted Required Parts & Hardware Breakdown
                  </h4>
                  <span className="text-xs font-black text-[#0B2D6B] bg-yellow-100 px-3 py-1 rounded-full border border-yellow-300">
                    Est. Cost: {aiResult.totalPartsCost}
                  </span>
                </div>

                {/* Categorized Lists */}
                <div className="space-y-2 text-xs">
                  <div className="font-extrabold text-emerald-800 text-[11px] uppercase tracking-wider">
                    🟢 Likely Required Parts (Prevents Overcharging)
                  </div>
                  {aiResult.likelyParts.map((p, i) => (
                    <div key={i} className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-slate-800">{p.name}</span>
                      <span className="font-mono font-bold text-emerald-900">{p.cost}</span>
                    </div>
                  ))}

                  <div className="font-extrabold text-amber-800 text-[11px] uppercase tracking-wider pt-2">
                    🟡 Possibly Required (On Standby)
                  </div>
                  {aiResult.possiblyRequired.map((p, i) => (
                    <div key={i} className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                      <span className="font-bold text-slate-800">{p.name}</span>
                      <span className="font-mono font-bold text-amber-900">{p.cost}</span>
                    </div>
                  ))}

                  <div className="font-extrabold text-slate-500 text-[11px] uppercase tracking-wider pt-2">
                    🔴 Only If Damaged (Conditional Replacement)
                  </div>
                  {aiResult.onlyIfDamaged.map((p, i) => (
                    <div key={i} className="p-3 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-between text-slate-500">
                      <span>{p.name}</span>
                      <span className="font-mono font-bold">{p.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 5 Action: Generate Expert Job Intelligence Card */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  <strong>Pre-Reservation Status:</strong> Cartridge reserved in <strong>{aiResult.expertInventory.expertName}</strong> van ✓
                </div>

                <button
                  onClick={() => setShowJobCardModal(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0B2D6B] hover:bg-[#F4C430] hover:text-[#0B2D6B] text-white font-black text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>View Technician "Job Intelligence Card"</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Modal Popup: The Professional's AI Job Intelligence Card */}
      {showJobCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in text-slate-900">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-[#0B2D6B] relative animate-scale-up max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#0B2D6B] text-white p-6 relative">
              <button
                onClick={() => setShowJobCardModal(false)}
                className="absolute top-5 right-5 text-blue-200 hover:text-white p-1 rounded-full hover:bg-blue-900/50"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-5 h-5 text-[#F4C430]" />
                <span className="text-xs font-bold text-[#F4C430] uppercase tracking-wider">ServEase AI Dispatch System</span>
              </div>
              <h3 className="text-xl font-black text-white">👨‍🔧 Technician AI Job Intelligence Card</h3>
              <p className="text-xs text-blue-200">Sent to technician upon accepting request</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              
              {/* Customer Info */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="text-slate-400 block font-medium">Customer & Location:</span>
                  <strong className="text-slate-900 text-sm">Ruturaj Dubal (Kothrud, Pune)</strong>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-md text-[10px]">
                  Verified Job
                </span>
              </div>

              {/* Diagnosis Summary */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
                <div className="font-extrabold text-[#0B2D6B] text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#0B2D6B]" />
                  🧠 AI Diagnosis & Confidence
                </div>
                <div className="text-slate-700">Problem: Continuous bathroom tap leakage</div>
                <div className="font-bold text-[#0B2D6B]">Damaged cartridge — 91% confidence</div>
              </div>

              {/* Likely Parts & Pre-Reservation */}
              <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 space-y-2">
                <div className="font-extrabold text-amber-900 flex items-center justify-between">
                  <span>📦 Likely Required Parts:</span>
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded">Pre-Reserved ✓</span>
                </div>
                <ul className="space-y-1 font-semibold text-slate-800">
                  <li>• Tap Cartridge (Quarter turn ceramic) ×1</li>
                  <li>• Rubber O-ring Gaskets ×2</li>
                  <li>• PTFE Thread Seal Tape ×1</li>
                </ul>
                <div className="text-slate-600 text-[11px] pt-1">Estimated parts cost: <strong>₹150 – ₹350</strong></div>
              </div>

              {/* DIY Attempts History */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="font-extrabold text-slate-900">🛠️ Customer DIY Attempts History:</div>
                <div className="space-y-1 text-slate-700">
                  <div>✅ Connection tightened by customer</div>
                  <div>✅ Water supply pressure checked</div>
                  <div className="text-rose-600 font-bold">❌ Leakage continues (Requires internal cartridge replacement)</div>
                </div>
              </div>

              {/* Recommended Tools */}
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 space-y-2">
                <div className="font-extrabold text-indigo-900">🔧 Recommended Technician Tools:</div>
                <div className="text-slate-700 font-semibold">
                  Adjustable pipe wrench, Screwdriver set, Plumber Teflon tape tool
                </div>
                <div className="text-slate-500 text-[11px]">Estimated on-site repair time: <strong>20–30 minutes (Single Visit Guaranteed)</strong></div>
              </div>

              <button
                onClick={() => {
                  alert("Technician Amit Kumar Verma has accepted the job with pre-reserved parts!");
                  setShowJobCardModal(false);
                }}
                className="w-full py-3.5 rounded-xl bg-[#0B2D6B] text-white font-extrabold text-xs hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-all shadow-md"
              >
                Accept Job & Dispatch Prepared Technician
              </button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
