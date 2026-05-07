"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Activity, Sparkles, Clock, Calendar, CheckCircle2, ChevronRight, ChevronDown, MessageSquare, ArrowRight, Home, Users, Info, Shield, Droplets, AlertTriangle, MoreHorizontal, Zap, Utensils, Camera } from "lucide-react"

// --- Components ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm rounded-3xl ${className}`}>
    {children}
  </div>
)

const BiomarkerSlider = ({ 
  name, value, unit, status, min, max, aevMin, aevMax 
}: { 
  name: string, value: number, unit: string, status: "OPTIMAL" | "ATTENTION" | "ACTION", 
  min: number, max: number, aevMin: number, aevMax: number 
}) => {
  // Calculate positions (0 to 100%)
  const range = max - min;
  const aevLeft = ((aevMin - min) / range) * 100;
  const aevWidth = ((aevMax - aevMin) / range) * 100;
  const aevRight = aevLeft + aevWidth;
  const valuePos = Math.max(0, Math.min(100, ((value - min) / range) * 100));
  
  const statusColors = {
    OPTIMAL: "bg-[#4CAF50] text-[#4CAF50] border-[#4CAF50]",
    ATTENTION: "bg-[#F59E0B] text-[#F59E0B] border-[#F59E0B]",
    ACTION: "bg-[#EF4444] text-[#EF4444] border-[#EF4444]"
  };
  
  const badgeColors = {
    OPTIMAL: "bg-[#4CAF50]/10 text-[#4CAF50] border-[#4CAF50]/20",
    ATTENTION: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
    ACTION: "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20"
  };

  const redZone = '#EF4444';
  const orangeZone = '#F59E0B';
  const greenZone = '#4CAF50';

  const leftOrange = aevLeft / 2;
  const rightOrange = aevRight + ((100 - aevRight) / 2);

  return (
    <div className="bg-white rounded-2xl p-6 border border-brand-charcoal/5 shadow-sm hover:border-brand-teal/20 transition-colors">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">AEV-CHEM</p>
          <h4 className="font-sans text-lg font-medium text-brand-charcoal">{name}</h4>
        </div>
        <div className="text-right">
          <div className="flex items-baseline gap-1 justify-end">
            <span className="font-serif text-3xl font-medium">{value}</span>
            <span className="text-xs text-brand-charcoal/50">{unit}</span>
          </div>
          <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border mt-1 ${badgeColors[status]}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Dynamic Gradient Slider */}
      <div 
        className="relative h-2 rounded-full my-8 shadow-inner"
        style={{ 
          background: `linear-gradient(to right, 
            ${redZone} 0%, 
            ${orangeZone} ${leftOrange}%, 
            ${greenZone} ${aevLeft}%, 
            ${greenZone} ${aevRight}%, 
            ${orangeZone} ${rightOrange}%, 
            ${redZone} 100%)`
        }}
      >
        {/* Value Dot */}
        <div 
          className={`absolute w-4 h-4 rounded-full -top-1 -ml-2 border-2 border-white shadow-md z-10 ${statusColors[status].split(' ')[0]}`}
          style={{ left: `${valuePos}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-[11px] text-brand-charcoal/40 font-medium mb-6">
        <span>{min} {unit}</span>
        <div className="flex gap-4">
           <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-[#EF4444]/30 rounded"></span> Sub-optimal</span>
           <span className="flex items-center gap-1 text-[#4CAF50]"><span className="w-2 h-0.5 bg-[#4CAF50]/40 rounded"></span> aēv optimal</span>
        </div>
        <span>{max} {unit}</span>
      </div>

      <div className="pt-4 border-t border-brand-charcoal/5 flex justify-between items-center text-sm">
        <span className="text-brand-charcoal/60">Watch for <strong>{value < aevMin ? 'lower' : 'higher'} values.</strong></span>
        <button className="text-brand-teal font-medium flex items-center gap-1 hover:opacity-80">
          Learn more in The Ark <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

const PillarAccordion = ({ 
  title, icon: Icon, good, attention, action, signals 
}: { 
  title: string, icon: any, good: number, attention: number, action: number, signals: any[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-brand-charcoal/10 rounded-3xl overflow-hidden shadow-sm mb-4 transition-all duration-300">
      {/* Header */}
      <div 
        className="p-6 md:p-8 flex items-center justify-between cursor-pointer hover:bg-brand-oat/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-brand-oat flex items-center justify-center text-brand-teal border border-brand-teal/10">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-serif text-[22px] font-medium mb-1">{title}</h3>
            <p className="text-sm text-brand-charcoal/50 font-light">{signals.length} signals tracked</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span> {good}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mt-1">Good</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span> {attention}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mt-1">Attention</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1.5 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#EF4444]"></span> {action}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mt-1">Action</span>
            </div>
          </div>
          <div className={`w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-brand-charcoal/5 bg-brand-oat/20"
          >
            <div className="p-6 md:p-8">
              <div className="bg-brand-charcoal/5 rounded-2xl p-6 mb-8">
                <p className="text-sm font-medium text-brand-charcoal mb-2">This pillar groups related signals so you can track them together over time.</p>
                <p className="text-sm text-brand-charcoal/60">Each signal tells a small part of the story. Grouped together, they give your veterinarian a fuller picture.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {signals.map((sig, idx) => (
                  <BiomarkerSlider key={idx} {...sig} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Dashboard() {
  return (
    <main className="font-sans text-brand-charcoal bg-brand-oat min-h-screen pb-20 selection:bg-brand-teal selection:text-white">
      
      {/* 1. Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 border-b border-brand-charcoal/5 bg-brand-oat/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl tracking-tight font-medium">aēv</span>
            <span className="bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-md text-[9px] font-bold tracking-widest uppercase ml-2">Demo</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide text-brand-charcoal/60">
            <a href="#" className="flex items-center gap-2 text-brand-charcoal"><Home size={16} /> Home</a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-charcoal transition-colors"><Activity size={16} /> Healthspan</a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-charcoal transition-colors"><Calendar size={16} /> Journey</a>
            <a href="#" className="flex items-center gap-2 hover:text-brand-charcoal transition-colors"><Users size={16} /> Companions</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-charcoal text-brand-oat flex items-center justify-center shadow-sm">
               <span className="text-xs font-medium">IS</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Profile Section */}
      <section className="relative w-full mt-8 overflow-hidden pt-12 pb-2 flex flex-col items-center">
        {/* Soft abstract background lighting */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-teal/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-white/40 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        {/* Centered Avatar */}
        <div className="relative z-10 mb-6 group cursor-pointer">
           <div className="w-64 h-64 md:w-[420px] md:h-[420px] rounded-full border-[8px] md:border-[12px] border-white shadow-2xl overflow-hidden bg-brand-charcoal transition-transform duration-500 group-hover:scale-[1.02]">
              <img src="/mock/german_shepherd.jpeg" alt="Milo" className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105" />
           </div>
           {/* Edit Photo Badge */}
           <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white hover:bg-brand-oat transition-colors w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg border-[4px] md:border-[6px] border-white z-20">
              <Camera size={28} className="text-brand-charcoal/70" />
           </div>
        </div>
        
        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-brand-charcoal mb-2 tracking-tight">
            Milo
          </h1>
          <p className="font-sans text-base md:text-lg text-brand-charcoal/60 font-light flex items-center gap-3 mb-5">
            German Shepherd <span className="w-1 h-1 rounded-full bg-brand-charcoal/20"></span> 3.6 years old
          </p>
          
          <div className="flex flex-wrap justify-center gap-2.5 mb-2">
             <div className="bg-white border border-brand-charcoal/5 px-4 py-1.5 rounded-full text-[12px] font-medium text-brand-charcoal/70 flex items-center gap-1.5 shadow-sm">
                <Activity size={14} className="text-[#4CAF50]" /> 32 kg
             </div>
             <div className="bg-white border border-brand-charcoal/5 px-4 py-1.5 rounded-full text-[12px] font-medium text-brand-charcoal/70 flex items-center gap-1.5 shadow-sm">
                <Heart size={14} className="text-brand-teal" /> Neutered & Healthy
             </div>
             <div className="bg-white border border-brand-charcoal/5 px-4 py-1.5 rounded-full text-[12px] font-medium text-brand-charcoal/70 flex items-center gap-1.5 shadow-sm">
                <Clock size={14} className="text-[#F59E0B]" /> 3 weeks with aēv
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 relative z-20 mb-8">
        
        {/* Care Arc Timeline (Slim Bar) */}
        <div className="bg-brand-charcoal text-white rounded-[2rem] p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
           <div className="absolute right-0 top-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 flex items-center gap-5 shrink-0 w-full md:w-auto">
             <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center border border-brand-teal/30 shrink-0">
                <Calendar size={20} />
             </div>
             <div>
               <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-teal mb-1">Care Arc • Next Steps</p>
               <h3 className="font-serif text-[22px] font-medium leading-tight">Milo's Results Are In</h3>
             </div>
           </div>

           {/* Timeline */}
           <div className="relative z-10 flex-1 w-full flex items-center justify-between px-2 md:px-8 pb-4 md:pb-0">
              <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-white/10 -translate-y-1/2 z-0 rounded-full"></div>
              <div className="absolute top-1/2 left-6 h-[2px] bg-brand-teal -translate-y-1/2 z-0 rounded-full w-[95%]"></div>

              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-[0_0_0_6px_#2C2C2C]">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="text-[11px] font-semibold text-white/90 hidden md:block absolute -bottom-6 whitespace-nowrap">Questionnaire</span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-[0_0_0_6px_#2C2C2C]">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="text-[11px] font-semibold text-white/90 hidden md:block absolute -bottom-6 whitespace-nowrap">Vet Visit</span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-[0_0_0_6px_#2C2C2C]">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="text-[11px] font-semibold text-white/90 hidden md:block absolute -bottom-6 whitespace-nowrap">Results In</span>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-brand-charcoal border-2 border-brand-teal text-brand-teal flex items-center justify-center shadow-[0_0_0_6px_#2C2C2C]">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal"></span>
                 </div>
                 <span className="text-[11px] font-semibold text-brand-teal hidden md:block absolute -bottom-6 whitespace-nowrap">Act on Insights</span>
              </div>
           </div>

           <div className="relative z-10 shrink-0 w-full md:w-auto mt-2 md:mt-0">
             <button className="w-full md:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full px-6 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm">
                View Insights <ArrowRight size={14} />
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: The Life Span Clock & Friendly Insights */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* The Life Span Clock Meter */}
            <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-110"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                {/* The Tachometer Arc */}
                <div className="relative w-56 md:w-64 h-40 md:h-48 shrink-0 flex items-end justify-center pb-2">
                   <svg className="absolute inset-0 w-full h-full" viewBox="0 10 100 65" preserveAspectRatio="xMidYMid meet">
                     <defs>
                       <linearGradient id="tachoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#4CAF50" />
                         <stop offset="50%" stopColor="#F59E0B" />
                         <stop offset="100%" stopColor="#EF4444" />
                       </linearGradient>
                     </defs>
                     
                     {/* Gradient Track */}
                     <path 
                       d="M 10 60 A 40 40 0 0 1 90 60" 
                       fill="none" 
                       stroke="url(#tachoGradient)" 
                       strokeWidth="5" 
                       strokeLinecap="round" 
                       className="opacity-90"
                     />
                     
                     {/* Average Marker (Top center) */}
                     <line x1="50" y1="20" x2="50" y2="24" stroke="currentColor" strokeWidth="2" className="text-brand-charcoal/20" strokeLinecap="round" />
                     <text x="50" y="16" fontSize="4" fill="currentColor" className="text-brand-charcoal/30 font-sans font-bold tracking-widest" textAnchor="middle">AVG</text>

                     {/* Indicator Dot (At 45 degrees left of center, optimal zone) */}
                     <circle cx="21.7" cy="31.7" r="4.5" fill="white" stroke="#4CAF50" strokeWidth="2.5" className="shadow-lg drop-shadow-md" />
                   </svg>
                   
                   <div className="text-center flex flex-col items-center relative z-10 mb-2">
                      <span className="block font-sans text-[10px] uppercase tracking-[0.15em] text-brand-charcoal/50 font-bold mb-1">Bio Age</span>
                      <span className="block font-serif text-[48px] font-light text-brand-teal leading-none">4.6<span className="text-2xl font-sans text-brand-charcoal/40 ml-1">yr</span></span>
                      <div className="mt-2 bg-[#4CAF50]/10 text-[#4CAF50] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#4CAF50]/20">
                         Optimal
                      </div>
                   </div>
                </div>

                <div>
                   <p className="font-sans text-[10px] uppercase tracking-[0.1em] font-bold text-brand-teal mb-3">Your Pet's Aging Trajectory</p>
                   <h2 className="font-serif text-3xl md:text-[38px] font-medium mb-4 text-brand-charcoal leading-tight">Aging 1.0 year slower.</h2>
                   <p className="font-sans text-brand-charcoal/80 leading-relaxed mb-6 font-light text-[16px]">
                     Milo's calendar age is <strong className="font-semibold text-brand-charcoal">3.6 years</strong>, but his biological clock is ticking slower! He is currently aging <strong className="font-semibold text-[#4CAF50]">0.8–1.2 years slower</strong> than his actual calendar age.
                   </p>
                   <div className="flex flex-wrap gap-4">
                     <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-brand-charcoal/5 hover:-translate-y-0.5 transition-transform">
                       <span className="block text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">Calendar Age</span>
                       <span className="text-[16px] font-semibold text-brand-charcoal">3.6 years</span>
                     </div>
                     <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-brand-charcoal/5 hover:-translate-y-0.5 transition-transform">
                       <span className="block text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold mb-1">Biological Age</span>
                       <span className="text-[16px] font-semibold text-brand-teal">~2.6 years</span>
                     </div>
                   </div>
                </div>
              </div>
            </GlassCard>

            {/* Actionable Insights Section (Full Width) */}
            <div className="flex flex-col gap-4">
               <h3 className="font-sans uppercase tracking-[0.1em] font-semibold text-brand-charcoal/50 text-xs pl-1">Actionable Insights</h3>
               <GlassCard className="p-2 md:p-2 bg-white/40">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                     
                     {/* Insight 1: Mobility */}
                     <div className="bg-[#4CAF50]/[0.02] rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-shadow border border-[#4CAF50]/20">
                        <div className="relative z-10 flex flex-col xl:flex-row gap-5 items-start">
                           <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#4CAF50]/30 transition-transform text-[#4CAF50] rotate-3 group-hover:rotate-6">
                              <Zap size={24} />
                           </div>
                           <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                 <h4 className="font-serif text-[22px] font-medium text-brand-charcoal leading-tight">Keep the momentum going!</h4>
                                 <span className="text-[#4CAF50] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#4CAF50]/30 bg-white">Mobility</span>
                              </div>
                              <p className="text-[14px] text-brand-charcoal/70 leading-relaxed font-light">
                                Milo's hip and elbow signals are excellent for a German Shepherd his age. Keep up the daily structured walks and add controlled off-leash time on soft ground — it protects the joints he'll need for years to come.
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Insight 2: Diet */}
                     <div className="bg-[#5889B8]/[0.02] rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-shadow border border-[#5889B8]/20">
                        <div className="relative z-10 flex flex-col xl:flex-row gap-5 items-start">
                           <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#5889B8]/30 transition-transform text-[#5889B8] -rotate-3 group-hover:-rotate-6">
                              <Utensils size={24} />
                           </div>
                           <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                 <h4 className="font-serif text-[22px] font-medium text-brand-charcoal leading-tight">Smooth, steady energy.</h4>
                                 <span className="text-[#5889B8] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#5889B8]/30 bg-white">Nutrition</span>
                              </div>
                              <p className="text-[14px] text-brand-charcoal/70 leading-relaxed font-light">
                                His metabolic rate is perfect. Deep-chested breeds like German Shepherds carry elevated bloat (GDV) risk — split his daily food into 2–3 portions and avoid heavy exercise for an hour after meals.
                              </p>
                           </div>
                        </div>
                     </div>
                     
                     {/* Insight 3: Joints */}
                     <div className="bg-[#0288D1]/[0.02] rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-shadow border border-[#0288D1]/20">
                        <div className="relative z-10 flex flex-col xl:flex-row gap-5 items-start">
                           <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#0288D1]/30 transition-transform text-[#0288D1] rotate-3 group-hover:rotate-6">
                              <Shield size={24} />
                           </div>
                           <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                 <h4 className="font-serif text-[22px] font-medium text-brand-charcoal leading-tight">Protect his hips.</h4>
                                 <span className="text-[#0288D1] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#0288D1]/30 bg-white">Joints</span>
                              </div>
                              <p className="text-[14px] text-brand-charcoal/70 leading-relaxed font-light">
                                German Shepherds are prone to hip and elbow dysplasia. Keep him lean (BCS 4-5/9) and start a daily glucosamine + omega-3 supplement now — it's far easier to protect joints than to repair them.
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Insight 4: Dental */}
                     <div className="bg-[#F59E0B]/[0.02] rounded-[1.5rem] p-6 relative overflow-hidden group hover:shadow-sm transition-shadow border border-[#F59E0B]/20">
                        <div className="relative z-10 flex flex-col xl:flex-row gap-5 items-start">
                           <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-[#F59E0B]/30 transition-transform text-[#F59E0B] -rotate-3 group-hover:-rotate-6">
                              <Sparkles size={24} />
                           </div>
                           <div>
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                 <h4 className="font-serif text-[22px] font-medium text-brand-charcoal leading-tight">Keep that smile bright.</h4>
                                 <span className="text-[#F59E0B] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#F59E0B]/30 bg-white">Dental</span>
                              </div>
                              <p className="text-[14px] text-brand-charcoal/70 leading-relaxed font-light">
                                We noticed a slight uptick in inflammatory markers linked to early plaque buildup. Integrating a daily dental chew will stop it in its tracks.
                              </p>
                           </div>
                        </div>
                     </div>

                  </div>
               </GlassCard>
            </div>

          </div>

          {/* Right Column: Ask AevArk & Quick Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             
             {/* Health Signals Card (Moved from Left Column) */}
             <GlassCard className="p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group bg-white/90">
                <div>
                   <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-charcoal/50 font-bold mb-1">90+ Health Signals</h4>
                   <p className="font-sans text-[11px] text-brand-charcoal/50 mb-6 leading-tight">Lab biomarkers &middot; physical, behavioral &amp; habit data</p>
                </div>
                
                <div className="flex justify-between items-end mb-6 px-1">
                    <div className="text-center flex flex-col items-center">
                        <span className="font-sans text-[38px] font-light text-[#4CAF50] mb-1 leading-none group-hover:scale-105 transition-transform">68</span>
                        <div className="w-6 h-0.5 bg-[#4CAF50] mb-2 rounded-full"></div>
                        <CheckCircle2 size={14} className="text-[#4CAF50]" />
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <span className="font-sans text-[38px] font-light text-[#F59E0B] mb-1 leading-none group-hover:scale-105 transition-transform">18</span>
                        <div className="w-6 h-0.5 bg-[#F59E0B] mb-2 rounded-full"></div>
                        <AlertTriangle size={14} className="text-[#F59E0B]" />
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <span className="font-sans text-[38px] font-light text-brand-charcoal/30 mb-1 leading-none group-hover:scale-105 transition-transform">8</span>
                        <div className="w-6 h-0.5 bg-brand-charcoal/20 mb-2 rounded-full"></div>
                        <MoreHorizontal size={14} className="text-brand-charcoal/30" />
                    </div>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5">
                    <p className="font-sans text-[11px] text-brand-charcoal/40 font-medium">Tested — Spring 2026</p>
                </div>
             </GlassCard>

             {/* Ask AevArk Card */}
             <GlassCard className="p-6 border border-brand-teal/10 bg-white flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
                     <Sparkles size={14} className="text-brand-teal" />
                   </div>
                   <h3 className="font-sans font-semibold text-brand-charcoal text-[15px]">Ask AevArk</h3>
                </div>
                <p className="text-[14px] font-light text-brand-charcoal/80 mb-6 leading-relaxed">
                   Want me to help think through questions for Milo's next vet visit?
                </p>
                
                <div className="flex flex-col gap-3 mb-auto">
                   <button className="w-full bg-white text-[12px] px-4 py-3 rounded-full border border-brand-charcoal/10 shadow-sm text-brand-charcoal/70 cursor-pointer hover:bg-brand-oat transition-colors font-medium text-left">
                     Any markers to watch?
                   </button>
                   <button className="w-full bg-white text-[12px] px-4 py-3 rounded-full border border-brand-charcoal/10 shadow-sm text-brand-charcoal/70 cursor-pointer hover:bg-brand-oat transition-colors font-medium text-left">
                     Diet recommendations?
                   </button>
                </div>

                <div className="relative mt-8">
                   <input type="text" placeholder="Ask about Milo..." className="w-full bg-white border border-brand-charcoal/10 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-brand-teal/50 shadow-sm transition-colors" />
                   <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-teal rounded-full text-white flex items-center justify-center hover:bg-opacity-90 transition-opacity">
                     <ArrowRight size={14} />
                   </button>
                </div>
             </GlassCard>

          </div>
        </div>

        {/* Latest Clinical Report Section */}
        <div className="mb-16">
           <div className="flex justify-between items-end border-b border-brand-charcoal/10 pb-4 mb-8">
              <h3 className="font-sans uppercase tracking-[0.1em] font-semibold text-brand-charcoal/50 text-xs">Latest Report • May 1, 2026</h3>
              <a href="#" className="text-brand-teal text-[13px] font-semibold flex items-center gap-1.5 hover:opacity-80 transition-opacity">View full report <ArrowRight size={14} /></a>
           </div>

           {/* Key Findings & Recommendations */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <GlassCard className="p-8">
                 <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-teal font-bold mb-6">Key Findings</h4>
                 <ul className="space-y-4">
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="text-brand-teal mt-1"><CheckCircle2 size={16} /></span> Hip & elbow joint markers all within optimal range</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="text-brand-teal mt-1"><CheckCircle2 size={16} /></span> Kidney values (BUN, Creatinine, SDMA) within normal limits</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="text-[#F59E0B] mt-1"><Activity size={16} /></span> Mild elevation in ALT — within reference range, worth tracking</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="text-brand-teal mt-1"><CheckCircle2 size={16} /></span> Weight stable at 32 kg, body condition score 5/9</li>
                 </ul>
              </GlassCard>
              <GlassCard className="p-8">
                 <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-teal font-bold mb-6">Recommendations</h4>
                 <ul className="space-y-4">
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span> Begin daily glucosamine + omega-3 joint supplement</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span> Recheck full chemistry panel in 6 months</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span> Monitor ALT trend — flag if rising at next panel</li>
                   <li className="flex gap-3 text-[15px] text-brand-charcoal/80"><span className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span> Dental cleaning recommended within next 3 months</li>
                 </ul>
              </GlassCard>
           </div>

           {/* Pillars */}
           <div>
              <PillarAccordion 
                title="Vitality" 
                icon={Heart}
                good={5} attention={0} action={0}
                signals={[
                  { name: "Albumin", value: 3.5, unit: "g/dL", status: "OPTIMAL", min: 2.0, max: 5.0, aevMin: 2.7, aevMax: 4.0 },
                  { name: "Alk Phos", value: 65, unit: "IU/L", status: "OPTIMAL", min: 0, max: 200, aevMin: 20, aevMax: 130 },
                  { name: "ALT (SGPT)", value: 72, unit: "IU/L", status: "ATTENTION", min: 0, max: 150, aevMin: 21, aevMax: 65 },
                  { name: "AST (SGOT)", value: 32, unit: "IU/L", status: "OPTIMAL", min: 0, max: 80, aevMin: 15, aevMax: 55 },
                  { name: "Total T4", value: 2.2, unit: "ug/dL", status: "OPTIMAL", min: 0.0, max: 4.5, aevMin: 1.0, aevMax: 3.5 }
                ]}
              />
              <PillarAccordion 
                title="Nutrition" 
                icon={Activity}
                good={3} attention={1} action={0}
                signals={[]}
              />
              <PillarAccordion 
                title="Kidney & Urinary" 
                icon={Droplets}
                good={4} attention={0} action={0}
                signals={[]}
              />
              <PillarAccordion 
                title="Immune Defense" 
                icon={Shield}
                good={5} attention={0} action={0}
                signals={[]}
              />
           </div>
        </div>

        {/* 3. Your Other Companions */}
        <div className="mb-12">
           <div className="flex justify-between items-end border-b border-brand-charcoal/10 pb-4 mb-6">
              <h3 className="font-sans uppercase tracking-[0.1em] font-semibold text-brand-charcoal/50 text-xs">Your Other Companions</h3>
              <a href="#" className="text-brand-teal text-[13px] font-semibold flex items-center gap-1.5 hover:opacity-80 transition-opacity">View all <ArrowRight size={14} /></a>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Luna */}
              <GlassCard className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer border-brand-charcoal/5">
                 <div className="h-44 overflow-hidden relative">
                    <img src="/mock/pet1.png" alt="Luna" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="p-6 relative">
                    <div className="absolute right-6 top-6 bg-[#4CAF50]/10 text-[#4CAF50] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#4CAF50]/20">Active</div>
                    <h4 className="font-serif text-[26px] font-medium mb-1">Luna</h4>
                    <p className="text-[13px] text-brand-charcoal/50 font-light mb-6">4 years, 9 months</p>
                    <div className="text-brand-teal text-sm font-semibold flex items-center justify-between group-hover:text-brand-charcoal transition-colors">
                       View Results <ChevronRight size={16} />
                    </div>
                 </div>
              </GlassCard>

              {/* Buddy */}
              <GlassCard className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer border-brand-charcoal/5">
                 <div className="h-44 overflow-hidden relative bg-brand-charcoal">
                    <img src="/mock/pet2.png" alt="Buddy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="p-6 relative">
                    <div className="absolute right-6 top-6 bg-[#4CAF50]/10 text-[#4CAF50] px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase border border-[#4CAF50]/20">Active</div>
                    <h4 className="font-serif text-[26px] font-medium mb-1">Buddy</h4>
                    <p className="text-[13px] text-brand-charcoal/50 font-light mb-6">Toy Poodle · 6 years, 2 months</p>
                    <div className="text-brand-teal text-sm font-semibold flex items-center justify-between group-hover:text-brand-charcoal transition-colors">
                       Questionnaire Due <ChevronRight size={16} />
                    </div>
                 </div>
              </GlassCard>
           </div>
        </div>

      </div>

    </main>
  );
}
