import React, { useState } from 'react';
import { Bot, Send, Image, Sparkles, CheckCircle2, User, Wrench, Package, ShieldCheck, RefreshCw, X, ArrowRight } from 'lucide-react';

export default function AiChatbotAssistant({ onBookProvider }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am ServEase AI Diagnostic Assistant 🤖. Upload a photo of your broken appliance/fixture or describe your issue, and I will analyze the symptoms, provide step-by-step solutions, predict required parts, and match you with a verified technician!',
      timestamp: 'Just now'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [attachedImage, setAttachedImage] = useState(null);

  const handleImageAttach = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAttachedImage({
          url: event.target.result,
          name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = (textToSend, customImg = null) => {
    const promptText = textToSend || inputPrompt;
    if (!promptText && !attachedImage && !customImg) return;

    const userImg = customImg || attachedImage;
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: promptText || 'Uploaded image for AI diagnosis.',
      image: userImg ? userImg.url : null,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setAttachedImage(null);
    setIsTyping(true);

    // AI Analysis simulation response
    setTimeout(() => {
      let botResponse = {};
      const lower = (promptText || '').toLowerCase();

      if (lower.includes('ac') || lower.includes('cooling') || lower.includes('air')) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'I have analyzed the visual symptoms and description.',
          diagnosis: {
            title: 'AC Capacitor Failure & Filter Clogging',
            confidence: '92%',
            severity: 'Medium',
            solutionSteps: [
              '1. Switch off AC mains power switch.',
              '2. Remove indoor unit plastic cover and wash mesh filter with water.',
              '3. Check outdoor condenser fan for debris obstructions.'
            ],
            predictedParts: ['45 MFD Dual-Run Capacitor (₹450)', 'R32 Gas Canister (₹850)'],
            suggestedTrade: 'AC Repair Specialist'
          },
          timestamp: 'Just now'
        };
      } else if (lower.includes('spark') || lower.includes('mcb') || lower.includes('wire') || lower.includes('electric')) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'Short Circuit Risk Detected!',
          diagnosis: {
            title: 'Overloaded Switchboard & Terminal Arc Short',
            confidence: '95%',
            severity: 'High Emergency',
            solutionSteps: [
              '1. DANGER: Keep MCB Breaker switched OFF immediately.',
              '2. Unplug heavy appliances (Geyser, Microwave) from that line.',
              '3. Do not touch damaged socket with bare hands.'
            ],
            predictedParts: ['16A Heavy Duty Switch/Socket (₹220)', 'Single Pole 16A MCB (₹310)'],
            suggestedTrade: 'Electrician'
          },
          timestamp: 'Just now'
        };
      } else {
        // Default plumbing leak response
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: 'I have analyzed your uploaded photo & problem description.',
          diagnosis: {
            title: 'Damaged Tap Cartridge & Seal Degradation',
            confidence: '94%',
            severity: 'Medium',
            solutionSteps: [
              '1. Turn off under-sink angle stop valve.',
              '2. Tighten outer spindle coupling nut using an adjustable wrench.',
              '3. Wrap PTFE Teflon tape 4-5 times around worn threads.'
            ],
            predictedParts: ['Quarter-Turn Tap Cartridge (₹180)', 'O-Ring Rubber Seals (₹30)', 'PTFE Tape (₹25)'],
            suggestedTrade: 'Plumber'
          },
          timestamp: 'Just now'
        };
      }

      setIsTyping(false);
      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <section id="ai-chatbot" className="py-20 bg-gradient-to-b from-[#071939] via-[#0B2D6B] to-[#0D3478] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 text-[#F4C430] border border-[#F4C430]/40 text-xs font-black uppercase tracking-wider">
            <Bot className="w-4 h-4 text-[#F4C430]" /> Interactive AI Feature
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            AI Diagnostic Chatbot Assistant
          </h2>
          <p className="text-blue-100/90 text-sm sm:text-base">
            Upload your problem photo directly in the chat stream to get real-time AI visual analysis, step-by-step solutions, and pre-reserved technician dispatch!
          </p>
        </div>

        {/* Chat Window Container */}
        <div className="bg-blue-950/90 rounded-3xl border-2 border-blue-800 shadow-2xl overflow-hidden flex flex-col h-[650px] backdrop-blur-md">
          
          {/* Chat Window Header */}
          <div className="bg-[#0B2D6B] p-4 sm:p-5 border-b border-blue-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-black text-xl shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0B2D6B] absolute -bottom-0.5 -right-0.5 animate-pulse"></span>
              </div>
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  ServEase AI Diagnostic Bot
                  <span className="text-[10px] bg-yellow-400/20 text-[#F4C430] px-2 py-0.5 rounded border border-[#F4C430]/40">Vision AI v2.4</span>
                </h3>
                <p className="text-xs text-blue-200">Online • Analyzes Image Photos & Symptoms</p>
              </div>
            </div>

            <button
              onClick={() => setMessages([{
                id: 1,
                sender: 'bot',
                text: 'Hello! I am ServEase AI Diagnostic Assistant 🤖. Upload a photo or describe your issue below!',
                timestamp: 'Just now'
              }])}
              className="text-xs text-blue-300 hover:text-white px-3 py-1.5 rounded-lg bg-blue-900/60 border border-blue-700/60 transition-colors"
            >
              Clear Chat
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-bold shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-3 ${
                  msg.sender === 'user'
                    ? 'bg-[#0B2D6B] text-white rounded-2xl rounded-tr-none p-4 border border-blue-700'
                    : 'bg-white text-slate-900 rounded-2xl rounded-tl-none p-5 border-2 border-yellow-400 shadow-xl'
                }`}>
                  
                  {/* User Uploaded Image Preview */}
                  {msg.image && (
                    <img src={msg.image} alt="Uploaded problem" className="w-full max-h-48 object-cover rounded-xl border border-slate-200 shadow-md mb-2" />
                  )}

                  <p className="leading-relaxed font-medium">{msg.text}</p>

                  {/* Bot Structured Diagnosis Bubble */}
                  {msg.diagnosis && (
                    <div className="pt-3 border-t border-slate-200 space-y-3 text-xs">
                      
                      <div className="flex items-center justify-between bg-blue-50 p-3 rounded-xl border border-blue-200">
                        <div>
                          <span className="text-[10px] font-black uppercase text-[#0B2D6B] block">AI Problem Detected</span>
                          <strong className="text-slate-900 text-sm">{msg.diagnosis.title}</strong>
                        </div>
                        <span className="px-2.5 py-1 bg-[#0B2D6B] text-[#F4C430] font-black text-[11px] rounded-full">
                          {msg.diagnosis.confidence} Match
                        </span>
                      </div>

                      {/* Solutions */}
                      <div className="space-y-1.5">
                        <strong className="text-[#0B2D6B] block font-bold">🟢 AI Recommended Solution & DIY Steps:</strong>
                        {msg.diagnosis.solutionSteps.map((step, i) => (
                          <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 font-medium">
                            {step}
                          </div>
                        ))}
                      </div>

                      {/* Predicted Parts */}
                      <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200 space-y-1">
                        <strong className="text-amber-900 block font-extrabold">📦 Predicted Parts Required:</strong>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {msg.diagnosis.predictedParts.map((pt, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white text-slate-800 rounded-md border border-amber-300 font-bold text-[11px]">
                              {pt}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        onClick={() => {
                          alert(`Matching top verified ${msg.diagnosis.suggestedTrade} with pre-reserved parts!`);
                          if (onBookProvider) onBookProvider();
                        }}
                        className="w-full py-3 bg-[#0B2D6B] text-white font-black rounded-xl hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-all text-xs flex items-center justify-center gap-2 shadow-md"
                      >
                        <span>Match & Dispatch Verified {msg.diagnosis.suggestedTrade}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </div>
                  )}

                  <span className="text-[10px] text-slate-400 block text-right mt-1">{msg.timestamp}</span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-center text-xs text-blue-200 italic">
                <div className="w-8 h-8 rounded-xl bg-[#F4C430] text-[#0B2D6B] flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5 animate-spin" />
                </div>
                <span>ServEase Vision AI is analyzing image pixels & symptoms...</span>
              </div>
            )}
          </div>

          {/* Quick Prompt Suggestion Chips */}
          <div className="px-4 py-2 bg-blue-900/40 border-t border-blue-800/80 flex flex-wrap gap-2 text-xs">
            <span className="text-blue-300 font-bold self-center">Try Prompts:</span>
            <button
              onClick={() => handleSendMessage('Analyze my bathroom tap leak photo')}
              className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-colors border border-blue-700 font-semibold"
            >
              💧 Tap Leak Photo
            </button>
            <button
              onClick={() => handleSendMessage('Why is my AC blowing warm air and humming?')}
              className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-colors border border-blue-700 font-semibold"
            >
              ❄️ AC Warm Air
            </button>
            <button
              onClick={() => handleSendMessage('My circuit breaker keeps tripping with sparking')}
              className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full hover:bg-[#F4C430] hover:text-[#0B2D6B] transition-colors border border-blue-700 font-semibold"
            >
              ⚡ Sparking Circuit
            </button>
          </div>

          {/* Attached Image Preview Bar */}
          {attachedImage && (
            <div className="px-4 py-2 bg-blue-900/80 border-t border-blue-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <img src={attachedImage.url} alt="Attached preview" className="w-8 h-8 rounded object-cover" />
                <span className="text-white font-medium truncate max-w-xs">{attachedImage.name} attached</span>
              </div>
              <button onClick={() => setAttachedImage(null)} className="text-rose-400 font-bold">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 bg-blue-950 border-t border-blue-800 flex items-center gap-3"
          >
            {/* Image Upload Button */}
            <label className="p-3 rounded-xl bg-blue-900 hover:bg-[#F4C430] hover:text-[#0B2D6B] text-[#F4C430] cursor-pointer transition-all border border-blue-700 shrink-0" title="Upload Photo for AI Diagnosis">
              <Image className="w-5 h-5" />
              <input type="file" accept="image/*" onChange={handleImageAttach} className="hidden" />
            </label>

            <input
              type="text"
              placeholder="Describe problem or attach photo..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              className="flex-1 bg-blue-900 text-white placeholder-blue-300/60 px-4 py-3 rounded-xl border border-blue-700 text-xs sm:text-sm focus:ring-2 focus:ring-[#F4C430] outline-none"
            />

            <button
              type="submit"
              className="p-3 rounded-xl bg-[#F4C430] text-[#0B2D6B] font-extrabold hover:bg-yellow-400 transition-all shadow-md shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
