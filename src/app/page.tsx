"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronRight, ArrowRight, Check, Activity, Users, ShieldCheck, Heart, Shield } from "lucide-react"

// --- Components ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/60 backdrop-blur-md border border-white/20 shadow-sm rounded-3xl transition-transform hover:-translate-y-1 ${className}`}>
    {children}
  </div>
)

const BentoBoard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
    {children}
  </div>
)

const BentoItem = ({ children, className = "", colSpan = 1 }: { children: React.ReactNode; className?: string; colSpan?: number }) => (
  <GlassCard className={`p-8 ${colSpan > 1 ? `md:col-span-${colSpan}` : ""} ${className}`}>
    {children}
  </GlassCard>
)

const Section = ({ id, children, className = "", dark = false }: { id?: string; children: React.ReactNode; className?: string; dark?: boolean }) => (
  <section id={id} className={`py-16 lg:py-24 px-4 md:px-12 ${dark ? "bg-brand-charcoal text-white" : ""} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
)

const caseStudies = [
  {
    name: "Topaz",
    metric: "185",
    unit: "µg/g",
    marker: "Calprotectin",
    goal: "Reduce gut inflammation",
    steps: ["Probiotics: 1-10B CFU", "Psyllium: ~0.5 g / 10 kg", "Remove high-fat / trigger foods"],
    image: "/mock/pet1.png"
  },
  {
    name: "Henry",
    metric: "26",
    unit: "ml/L",
    marker: "Zonulin",
    goal: "Repair gut lining",
    steps: ["L-glutamine: 250-500 mg / 10 kg", "Prebiotics (Inulin/FOS)", "8 week elimination diet"],
    image: "/mock/pet2.png"
  },
  {
    name: "Koda",
    metric: "312",
    unit: "ng/mL",
    marker: "IGF-1",
    goal: "Slow abnormal aging",
    steps: ["Maintain lean BCS: 4-5/9", "Limit portion size", "Daily activity: 60+ min"],
    image: "/mock/pet3.png"
  },
  {
    name: "Ray",
    metric: "17",
    unit: "µg/dL",
    marker: "SDMA",
    goal: "Reverse early kidney disease",
    steps: ["Phosphorus-controlled nutrition plan", "Hydration: wet / water-rich meals", "Monitor kidney markers quarterly"],
    image: "/mock/hero.png"
  },
  {
    name: "Cricket",
    metric: "6.2",
    unit: "mg/L",
    marker: "CRP",
    goal: "Lower cancer risk",
    steps: ["Omega-3s: 75 mg/kg EPA+DHA", "Curcumin: ~50 mg/kg", "Anti-inflammatory nutrition plan"],
    image: "/mock/cat.png"
  }
];

function CaseStudiesMarquee() {
  return (
    <section className="bg-brand-oat overflow-hidden border-t border-b border-brand-charcoal/10 py-16 lg:py-24">
      <div className="text-center mb-16 px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 text-brand-charcoal">
          Early detection. <em className="text-brand-teal not-italic">Real lives saved.</em>
        </h2>
        <p className="font-sans text-lg opacity-70 max-w-2xl mx-auto">
          Our panel has already caught real diseases in dogs and cats with no visible symptoms, giving parents the chance to act before it's too late.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="flex gap-6 animate-marquee w-max px-4">
          {[...caseStudies, ...caseStudies].map((pet, i) => (
            <div key={i} className="relative w-[300px] md:w-[350px] h-[450px] rounded-3xl overflow-hidden shrink-0 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-brand-charcoal">
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6">
                <h3 className="font-serif text-2xl font-medium text-white shadow-sm">{pet.name}</h3>
              </div>
              
              <div className="relative z-10 px-6 pb-2">
                <div className="flex items-baseline text-white gap-1 shadow-sm drop-shadow-md">
                   <span className="font-sans text-5xl md:text-6xl font-light tracking-tight">{pet.metric}</span>
                   <span className="font-sans text-lg font-medium opacity-90">{pet.unit}</span>
                   <span className="font-sans text-xs md:text-sm uppercase tracking-widest opacity-80 ml-auto leading-tight">{pet.marker}</span>
                </div>
              </div>

              <div className="relative z-10 m-4 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl">
                 <p className="font-sans font-semibold text-[13px] md:text-sm mb-3 text-brand-charcoal">Goal: {pet.goal}</p>
                 <ul className="space-y-1.5 border-t border-brand-charcoal/10 pt-3">
                   {pet.steps.map((step, j) => (
                     <li key={j} className="font-sans text-[11px] md:text-xs opacity-75 flex items-start gap-2">
                       <span className="text-brand-teal font-bold leading-none mt-[2px]">•</span> {step}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThePanelSection() {
  return (
    <Section dark className="bg-brand-teal py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="lg:pr-12">
          <span className="font-sans font-medium uppercase tracking-[0.2em] text-brand-oat text-xs mb-6 block drop-shadow-sm">The aēv panel — 90+ signals</span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6 text-white leading-tight">
            The panel that sees <em className="text-brand-charcoal italic">further.</em>
          </h2>
          <p className="font-sans text-lg opacity-90 mb-10 text-white max-w-lg font-light leading-relaxed">
            Most pets age silently. We help you see changes before obvious signs appear — through twice-yearly testing and by tracking whether key health signals are moving in the right direction.
          </p>
          <ul className="space-y-5 text-white/70 font-sans text-sm font-light border-t border-white/10 pt-8">
            {[
              "Extensive blood, urine and fecal panel",
              "Thorough vet physical exam",
              "Behavioral & cognitive questionnaire",
              "Aging and potential health action scores and recommendations — based on latest research",
              "Built by general practitioners & academia for your pet and vet",
              "Using Antech or IDEXX, largest veterinary diagnostic labs in the U.S."
            ].map((item, i) => (
              <li key={i} className={`flex gap-4 items-start ${i !== 0 ? 'border-t border-white/20 pt-5' : ''}`}>
                <span className="text-brand-charcoal text-xs mt-1">●</span> <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - UI Cards */}
        <div>
          <span className="font-sans font-semibold uppercase tracking-[0.1em] text-white/40 text-[10px] mb-4 block">SAMPLE HEALTH REPORT — FOR ILLUSTRATION ONLY</span>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Card 1: Health Signals */}
            <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="font-sans font-medium text-white text-sm mb-1">90+ Health Signals</h3>
              <p className="font-sans text-[11px] text-white/50 mb-6 leading-tight">Lab biomarkers · physical, behavioral & habit data</p>
              
              <div className="flex justify-between items-end px-2">
                <div className="text-center flex flex-col items-center">
                  <span className="font-sans text-4xl font-light text-[#4CAF50] mb-2">68</span>
                  <div className="w-8 h-0.5 bg-[#4CAF50] mb-2"></div>
                  <Check className="text-[#4CAF50]" size={14} />
                </div>
                <div className="text-center flex flex-col items-center">
                  <span className="font-sans text-4xl font-light text-[#FFB300] mb-2">18</span>
                  <div className="w-8 h-0.5 bg-[#FFB300] mb-2"></div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#FFB300]"></div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <span className="font-sans text-4xl font-light text-white/40 mb-2">8</span>
                  <div className="w-8 h-0.5 bg-white/20 mb-2"></div>
                  <span className="text-white/40 text-xs font-bold leading-none tracking-widest">...</span>
                </div>
              </div>
              <p className="font-sans text-[10px] text-white/40 mt-8">Tested — Spring 2026</p>
            </div>

            {/* Card 2: Aging Trajectory */}
            <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-6 shadow-2xl">
               <h3 className="font-sans font-medium text-white text-sm mb-8">Your Pet's Aging Trajectory</h3>
               
               <div className="relative w-full h-3 rounded-full bg-gradient-to-r from-[#4CAF50] via-[#FFB300] to-[#E57373] mb-3">
                 {/* Slider Thumb */}
                 <div className="absolute left-[25%] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#4CAF50] border-2 border-brand-charcoal text-white rounded px-2 py-0.5 flex items-center justify-center text-[10px] font-bold shadow-md">
                   «
                 </div>
               </div>
               
               <div className="flex justify-between text-[10px] font-sans font-medium text-white/50 mb-4">
                 <span className="text-[#4CAF50]">Optimal</span>
                 <span className="text-[#FFB300]">Moderate</span>
                 <span className="text-[#E57373]">Elevated</span>
               </div>
               
               <div className="flex justify-between text-[10px] font-sans text-white/40 mb-6">
                 <span>-2yr</span>
                 <div className="text-center">
                   <span className="block">calendar age</span>
                   <span className="text-white font-medium">8 years</span>
                 </div>
                 <span>+2yr</span>
               </div>
               
               <p className="font-sans text-[11px] text-white/60 leading-tight">Aging 1.3–1.7 years slower than calendar age</p>
            </div>
          </div>

          {/* Card 3: Opportunities */}
          <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-6 shadow-2xl">
             <h3 className="font-sans uppercase tracking-widest text-white/50 text-[10px] font-bold mb-6">Opportunities to help your pet maximize its health potential</h3>
             
             <div className="space-y-4">
               {/* Bar 1 */}
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 w-40 shrink-0">
                   <span className="text-[#FFB300]">⏳</span>
                   <span className="font-sans text-[13px] text-white/80">Weight & Metabolism</span>
                 </div>
                 <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#FFB300] w-[15%]"></div>
                 </div>
                 <span className="font-sans text-[13px] text-[#FFB300] font-medium w-8 text-right">15%</span>
               </div>
               {/* Bar 2 */}
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 w-40 shrink-0">
                   <span className="text-[#4CAF50]">🦷</span>
                   <span className="font-sans text-[13px] text-white/80">Teeth & Gums</span>
                 </div>
                 <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-[#4CAF50] w-[8%]"></div>
                 </div>
                 <span className="font-sans text-[13px] text-[#4CAF50] font-medium w-8 text-right">8%</span>
               </div>
               {/* Bar 3 */}
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 w-40 shrink-0">
                   <span className="text-white/50">🦴</span>
                   <span className="font-sans text-[13px] text-white/80">Daily Activity & Habits</span>
                 </div>
                 <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 bg-white/30 w-[2%]"></div>
                 </div>
                 <span className="font-sans text-[13px] text-white/60 font-medium w-8 text-right">2%</span>
               </div>
             </div>
             
             <div className="border-t border-white/10 mt-6 pt-4">
               <p className="font-sans text-[11px] text-white/50">Overall: 75% optimized — 25% more room to improve</p>
             </div>
          </div>
          
          <p className="font-sans text-[10px] text-white/30 mt-4 italic leading-relaxed">
            Sample report shown for illustrative purposes only. Specific biomarkers, panels, and laboratory providers are periodically updated to reflect advances in veterinary science, clinical best practices, and operational considerations. Actual reports may vary from samples shown.
          </p>

        </div>
      </div>
    </Section>
  );
}

function DetailedHealthReportSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center py-24 overflow-hidden border-t border-brand-charcoal/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="/mock/health_report_mockup.png" 
          alt="Aev Healthspan Report Dashboard" 
          className="w-full h-full object-cover object-center lg:object-left"
        />
        {/* Soft gradient to ensure text readability on the right side if needed, though cards are white */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-oat/50 hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Right Column: Recommendations */}
          <div className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
             <h3 className="font-sans font-semibold uppercase tracking-widest text-brand-charcoal/60 text-xs mb-6">Sample Clinical Recommendations</h3>
             
             <div className="space-y-4">
               {/* Rec 1 */}
               <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[1.5rem] shadow-xl border border-white/50 relative overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFB300]"></div>
                  <h4 className="font-sans uppercase tracking-widest text-brand-charcoal/50 text-[10px] font-bold mb-3">Weight & Metabolism</h4>
                  <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                    Replace your measuring cup with a kitchen scale — cups over-serve by up to 20%. Switch to two fixed mealtimes and remove all between-meal treats; swap high-calorie snacks for plain baby carrots or green beans.
                  </p>
               </div>
               
               {/* Rec 2 */}
               <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[1.5rem] shadow-xl border border-white/50 relative overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4CAF50]"></div>
                  <h4 className="font-sans uppercase tracking-widest text-brand-charcoal/50 text-[10px] font-bold mb-3">Teeth & Gums</h4>
                  <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                    Start brushing with a VOHC-approved enzymatic toothpaste — takes under two minutes. Add a VOHC-seal dental water additive to the bowl daily.
                  </p>
               </div>

               {/* Rec 3 */}
               <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[1.5rem] shadow-xl border border-white/50 relative overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-charcoal/20"></div>
                  <h4 className="font-sans uppercase tracking-widest text-brand-charcoal/50 text-[10px] font-bold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-charcoal/40"></span> Organ Support — Kidneys
                  </h4>
                  <p className="font-sans text-sm text-brand-charcoal/80 leading-relaxed">
                    Add a running water fountain — most pets drink significantly more from moving water. Ask your vet about switching to a food with phosphorus below 0.5% dry matter.
                  </p>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  const features = [
    { name: "Chemistry Panel with SDMA", desc: "Early kidney function detection — more sensitive than creatinine alone", std: "✓", aev: "✓ + SDMA & trends" },
    { name: "Complete Blood Count (CBC)", desc: "Anemia, infection, inflammation — full hematology picture", std: "✓", aev: "✓" },
    { name: "Urinalysis (UA)", desc: "Kidney concentration, protein, glucose, bladder and diabetes signals", std: "✓", aev: "✓" },
    { name: "Total T4 — Thyroid Screening", desc: "Hyperthyroidism in cats; hypothyroidism in dogs", std: "Sometimes", aev: "✓" },
    { name: "Fecal Testing", desc: "Parasites, Giardia, and digestive health", std: "Sometimes", aev: "✓" },
    { name: "Full Physical Exam", desc: "Weight, BCS, MCS, vitals, blood pressure, nose-to-tail, oral cavity & dental assessment", std: "Routine", aev: "✓ Detailed" },
    { name: "Dental & Oral Health", desc: "Oral cavity, teeth, gums, tartar buildup, periodontal disease staging", std: "Sometimes", aev: "✓" },
    { name: "Behavioral & Habit Intake", desc: "At-home questionnaire + vet cognitive and behavioral assessment", std: "—", aev: "✓" },
    { name: "Health Potential Score & Recommendations", desc: "Longitudinal trends, personalized action steps for owner and vet", std: "—", aev: "✓" }
  ];

  return (
    <Section className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm border border-brand-charcoal/10 overflow-hidden">
          {/* Table Header */}
          <div className="bg-brand-charcoal text-white px-8 py-5 flex items-center text-[11px] font-sans font-bold uppercase tracking-widest">
             <div className="w-1/2">Test / Exam</div>
             <div className="w-1/4 text-center text-white/50">Standard</div>
             <div className="w-1/4 text-center text-brand-teal">Aēv</div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-brand-charcoal/5">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center px-8 py-5 hover:bg-brand-oat/30 transition-colors">
                <div className="w-1/2 pr-6">
                  <h4 className="font-sans font-medium text-brand-charcoal text-sm">{feature.name}</h4>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 leading-tight mt-1">{feature.desc}</p>
                </div>
                <div className="w-1/4 text-center font-sans text-xs text-brand-charcoal/40 font-medium">
                  {feature.std}
                </div>
                <div className="w-1/4 text-center font-sans text-xs text-brand-teal font-semibold">
                  {feature.aev}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 px-4">
          <p className="font-sans text-[11px] text-brand-charcoal/40 italic mb-4">
            + Optional add-ons available based on your pet's breed, age, and risk profile.
          </p>
          <div className="bg-brand-teal/5 border border-brand-teal/20 p-5 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="text-brand-teal shrink-0 mt-0.5" size={20} />
            <p className="font-sans text-xs text-brand-teal font-medium leading-relaxed">
              All results are reviewed by our engine — based on the latest veterinary research — and shared directly with your vet for coordinated, informed care.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function QuestionnaireSection() {
  return (
    <Section className="bg-brand-oat py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Interactive UI Mock */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-charcoal/5 relative w-full max-w-xl mx-auto">
          {/* Top pills */}
          <div className="flex justify-between items-center mb-8">
             <div className="flex gap-2">
               <span className="bg-brand-teal text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
                 <span className="opacity-80 text-[10px]">🐾</span> Dog
               </span>
               <span className="text-brand-charcoal/40 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 border border-brand-charcoal/10">
                 <span className="opacity-60 text-[10px]">🐱</span> Cat
               </span>
             </div>
             <span className="bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-xs font-semibold">Golden Retriever</span>
          </div>

          <p className="font-sans font-semibold uppercase tracking-widest text-brand-charcoal/40 text-[10px] mb-4">Behavioral Assessment</p>
          <h3 className="font-serif text-3xl font-medium mb-3 leading-tight">How would you rate your dog's anxiety when left alone?</h3>
          <p className="font-sans text-sm text-brand-charcoal/60 mb-12">Signs include destructiveness, vocalization, pacing, or elimination when alone.</p>

          {/* Custom Slider Mock */}
          <div className="mb-8">
            <div className="relative w-full h-1 bg-brand-teal/20 rounded-full mb-4">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-teal rounded-full shadow-md cursor-pointer border-2 border-white"></div>
            </div>
            <div className="flex justify-between font-sans text-xs font-medium text-brand-charcoal/40 px-1 mb-6">
               <span>1</span>
               <span>2</span>
               <span>3</span>
               <span>4</span>
               <span>5</span>
            </div>
            
            <div className="bg-brand-oat/50 border border-brand-charcoal/5 rounded-2xl py-4 text-center">
               <span className="block font-sans font-semibold text-sm">No signs</span>
               <span className="block font-sans text-xs text-brand-charcoal/60 mt-0.5">Relaxed when alone</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-brand-charcoal/10 font-sans text-[11px] text-brand-charcoal/40">
             <span>Question 12 of 47</span>
             <span className="font-medium">Behavioral & Cognitive</span>
          </div>
        </div>

        {/* Right Side: Text & Timeline */}
        <div className="lg:pl-8">
           <span className="font-sans font-medium uppercase tracking-widest text-brand-teal text-xs mb-6 block">The Questionnaire</span>
           <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight">
             Built by researchers.<br />
             Tailored to your <em className="text-brand-teal not-italic">companion.</em>
           </h2>
           <div className="font-sans text-lg opacity-70 leading-relaxed mb-10 space-y-4">
             <p>Every species ages differently. Every breed carries its own risks. Our questionnaires are built with veterinary researchers and practicing clinicians to capture the behavioral, cognitive, and lifestyle signals that lab work alone can miss.</p>
             <p>The result is a comprehensive picture of your companion's health — one that can surface breed-specific risks and subtle changes before they become visible problems.</p>
           </div>

           {/* Timeline Card */}
           <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-brand-charcoal/5">
             <div className="flex items-center gap-3 mb-8">
               <Activity className="text-brand-teal" size={20} />
               <h4 className="font-sans font-semibold text-brand-charcoal text-sm">Over Time</h4>
             </div>
             
             <div className="relative pl-6 border-l-2 border-brand-charcoal/10 space-y-8">
                {/* Visit 1 */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-brand-charcoal/5 flex items-center justify-center border border-brand-charcoal/10">
                    <span className="text-brand-charcoal/50 text-[10px]">1</span>
                  </div>
                  <h5 className="font-sans font-semibold text-sm mb-1">Visit 1</h5>
                  <p className="font-sans text-sm text-brand-charcoal/60">Establish your pet's behavioral baseline</p>
                </div>
                {/* Visit 2 */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-[#FFB300]/10 flex items-center justify-center border border-[#FFB300]/20">
                    <span className="text-[#FFB300] text-[10px]">↗</span>
                  </div>
                  <h5 className="font-sans font-semibold text-sm mb-1">Visit 2</h5>
                  <p className="font-sans text-sm text-brand-charcoal/60">Detect subtle shifts in cognition, anxiety, or energy</p>
                </div>
                {/* Visit 3 */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/20">
                    <Activity className="text-brand-teal w-3 h-3" />
                  </div>
                  <h5 className="font-sans font-semibold text-sm mb-1">Visit 3+</h5>
                  <p className="font-sans text-sm text-brand-charcoal/60">Build a longitudinal profile that sharpens with every assessment</p>
                </div>
             </div>
             
             <div className="mt-8 pt-6 border-t border-brand-charcoal/5">
               <p className="font-sans text-xs text-brand-charcoal/50">The longer your pet is with aēv, the clearer the picture gets.</p>
             </div>
           </div>
           
           <p className="font-sans text-[10px] text-brand-charcoal/30 mt-6 italic">
             Behavioral instruments adapted from validated veterinary behavioral and cognitive scales.
           </p>
        </div>
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <main className="font-sans text-brand-charcoal selection:bg-brand-teal selection:text-white pb-20">
      
      {/* 1. Premium Glassmorphism Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-12">
        <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="font-serif text-3xl tracking-tight font-medium">aēv</div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-brand-teal transition-colors">How it works</a>
          </div>
          <a href="/dashboard" className="bg-brand-charcoal text-brand-oat px-6 py-2.5 rounded-full font-medium text-sm hover:bg-opacity-90 transition-all">
            Log in
          </a>
        </div>
      </nav>

      {/* 2. Gamified Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-between pb-24 pt-32 px-4 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <img src="/mock/hero_final_4.png" alt="Happy family with dog" className="w-full h-full object-cover object-[75%_center] md:object-right" />
        </div>
        
        <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col justify-between mt-8">
          <div className="w-full md:w-1/2 lg:w-5/12 text-left mr-auto lg:pl-6">
            <span className="font-sans font-medium uppercase tracking-widest text-brand-charcoal/80 text-sm mb-6 block drop-shadow-sm">Signal</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.05] mb-8 text-brand-charcoal italic drop-shadow-md">
              More Good Years Together
            </h1>
            <p className="font-sans text-xl leading-relaxed mb-10 opacity-90 font-medium drop-shadow-sm pr-4">
              Advanced longevity tracking for the pets who hold us together
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="/waitlist" className="bg-brand-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg">
                Join the waitlist
              </a>
            </div>
          </div>
          
          <div className="relative w-full max-w-sm self-end mt-16 lg:mt-0 mb-24 lg:mb-12 z-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full">
              <GlassCard className="p-6 bg-white/90 border border-white shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm border border-brand-charcoal/10">
                     <img src="/mock/hero_final_4.png" alt="Mochi" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-brand-charcoal/50">Wellness Badge</h3>
                    <p className="font-serif text-xl font-medium">Mochi's Health Score</p>
                  </div>
                </div>
                <div className="bg-brand-oat p-4 rounded-2xl flex items-center justify-between mt-4">
                   <span className="font-serif text-2xl">92% Optimized</span>
                   <ChevronRight className="text-brand-teal" />
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
        
        {/* Credibility Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-oat via-brand-oat/80 to-transparent flex items-end justify-center pb-8 px-4 md:px-12 z-10 pointer-events-none">
           <p className="text-brand-charcoal font-sans text-sm md:text-base tracking-wide font-medium text-center max-w-3xl drop-shadow-sm pointer-events-auto">
             <strong className="font-bold uppercase tracking-widest text-brand-charcoal mr-2 text-xs md:text-sm">From Vets, For Pets</strong>
             <span>— Backed by 100+ years of combined experience across general practice and veterinary academia.</span>
           </p>
        </div>

      </section>


      {/* 5. Case Studies Marquee */}
      <CaseStudiesMarquee />

      {/* 4. Early Detection Steps */}
      <Section id="how-it-works" dark className="bg-gradient-to-br from-[#1a1a1a] to-[#252525]">
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-end border-b border-white/10 pb-12 mb-16">
           <h2 className="font-serif text-4xl md:text-5xl font-medium max-w-xl">
             Early detection & <em className="text-brand-teal not-italic">real improvement.</em>
           </h2>
           <p className="font-sans text-lg leading-relaxed opacity-75 max-w-md font-light">
             Most pets age silently. We help you see changes before obvious signs appear — through twice-yearly testing and by tracking whether key health signals are moving in the right direction.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {[
            { num: "01", sub: "Subscribe & Prepare", title: "Know", desc: "Answer a short questionnaire about your pet." },
            { num: "02", sub: "Vet Clinic Visit", title: "Test", desc: "Extensive lab panel plus a detailed physical and oral exam." },
            { num: "03", sub: "Get Insights & Track", title: "Act", desc: "Work with clear metrics & recommendations for your pet longevity." },
            { num: "04", sub: "Closing the Loop", title: "Validate", desc: "Track progress every 6 months, validating impact of care." }
          ].map((step, i) => (
            <div key={i} className="lg:border-l-2 lg:border-white/10 lg:first:border-0 pl-6 pr-4">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="text-xs font-semibold text-brand-teal tracking-widest">{step.num}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/35">{step.sub}</span>
              </div>
              <h3 className="font-serif text-2xl tracking-tight text-white mb-3">{step.title}</h3>
              <div className="mb-4 h-0.5 w-7 bg-brand-teal"></div>
              <p className="text-sm font-light leading-relaxed text-white/75">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 justify-between">
           <p className="font-serif text-2xl italic leading-relaxed text-white/80 max-w-2xl">
             “Because the goal is not just more years with your pet — it is more good, healthy years that continue supporting your family.”
           </p>
           <a href="/waitlist" className="bg-brand-teal text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all shrink-0">
             Join the waitlist
           </a>
        </div>
      </Section>

      {/* 6. The Panel Section (Detailed Graphs) */}
      <ThePanelSection />
      
      {/* 7. Detailed Healthspan & Recommendations */}
      <DetailedHealthReportSection />
      
      {/* 8. Comparison Table */}
      <ComparisonTableSection />
      
      {/* 9. The Questionnaire */}
      <QuestionnaireSection />
      
      {/* 8. Why It Matters */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-4">Why it matters</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Some bonds <em className="text-brand-teal not-italic">hold families together.</em>
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-4 opacity-80">
              Our dogs and cats show up every single day — no complaints, no conditions. For many families, they are the reason someone got out of bed or felt safe enough to try again.
            </p>
            <p className="font-sans text-lg leading-relaxed opacity-80">
              When they age and slow down, the whole family feels it: the grief, the loneliness, the anxiety, and the high cost of care. aēv helps you protect that daily bond for as long as possible — by catching changes early and giving clear, actionable steps to protect your pet's health.
            </p>
          </div>
          <div>
            <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40 text-[11px] mb-5">Real stories from pet parents</p>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar w-[calc(100vw-2rem)] lg:w-[calc(50vw-2rem)] pr-4 lg:pr-12 -mr-4 lg:-mr-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                {
                  text: "My cat helped my son through his darkest periods — he was the reason he got out of bed and kept trying.",
                  image: "/mock/cat.png"
                },
                {
                  text: "I have learned to find comfort and strength in the small moments — just me, and my kids' dogs and cats. I want that to last forever. For them, and for me.",
                  image: "/mock/pet1.png"
                },
                {
                  text: "We lost one of our cats nine months ago. I cannot shake the memory of my kids' pain and grief. We still have other dogs and cats at home — I know that day will come for them too. I just want to push it as far into the future as possible.",
                  image: "/mock/pet2.png"
                }
              ].map((quote, i) => (
                <div key={i} className="snap-start shrink-0 w-[280px] md:w-[360px] bg-white rounded-[2rem] overflow-hidden shadow-md flex flex-col border border-brand-charcoal/5">
                  <div className="h-56 w-full bg-brand-charcoal relative">
                    <img src={quote.image} alt="Pet" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col border-t-4 border-brand-teal bg-white">
                    <p className="font-serif text-[17px] leading-relaxed flex-1 italic text-brand-charcoal opacity-90">“{quote.text}”</p>
                    <p className="font-sans text-[10px] md:text-xs opacity-50 uppercase tracking-widest font-semibold mt-8 text-brand-teal">— Pet parent, founding member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. Our Mission */}
      <Section dark className="bg-brand-charcoal text-center">
        <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-4">Our mission</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mx-auto max-w-4xl mb-16">
          Help as many pets as possible live <em className="text-brand-teal not-italic">healthier, longer lives</em> — and give their families more good years together.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
           <div>
             <div className="flex items-center gap-3 mb-4">
               <ShieldCheck className="text-brand-teal" />
               <h3 className="font-sans font-semibold text-xl">Credibility first</h3>
             </div>
             <p className="opacity-75 leading-relaxed font-light text-sm">Everything we do is grounded in real veterinary science — built by general practitioners and academic researchers. No gimmicks, no shortcuts.</p>
           </div>
           <div>
             <div className="flex items-center gap-3 mb-4">
               <Activity className="text-brand-teal" />
               <h3 className="font-sans font-semibold text-xl">Empowerment always</h3>
             </div>
             <p className="opacity-75 leading-relaxed font-light text-sm">Real data, clear insights, and personalized recommendations — so every conversation with your vet counts.</p>
           </div>
        </div>
      </Section>

      {/* 13. The Founder's Story */}
      <Section className="bg-brand-oat overflow-hidden">
        <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-4">The Founder's Mission</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
           <div>
             <h2 className="font-serif text-4xl md:text-5xl font-bold mb-10">
               From a Father's <em className="text-brand-teal not-italic">Heart</em>
             </h2>
             <div className="space-y-6 font-sans text-lg opacity-80 leading-relaxed">
               <p className="font-serif text-2xl text-brand-charcoal opacity-100">I am a dad. Four kids. Two dogs. Four cats.</p>
               <p>For five years, my family went through something hard. My children struggled — really struggled. And during the darkest stretches, I watched something happen that I still cannot fully explain: our dogs and cats just showed up. Every morning. Every night. No agenda. No words. Just presence.</p>
               <p>They did not fix anything. But they held the thread. And somewhere along the way, that thread became the thing that pulled us through.</p>
               <div className="border-l-2 border-brand-teal pl-6 py-2 my-8">
                 <p className="font-serif text-2xl italic text-brand-charcoal">I will never be able to repay that.</p>
               </div>
               <p>But here is what I know: their lives are short. Far shorter than ours. Every healthy year we get with them is a year of less fear, less grief, less loss — and a family more capable of handling whatever comes next. Those years are not guaranteed. But some of them are preventable to lose.</p>
               <p>We can understand what is happening inside their bodies. We can catch things early. We can give them a real shot at their maximum healthy life.</p>
               <div className="border-l-2 border-[#5889B8] pl-6 py-2 my-8">
                 <p className="font-serif text-2xl italic text-brand-charcoal">That is why I built AevArk.</p>
               </div>
             </div>
           </div>
           <div className="relative">
              <img src="/mock/cat.png" alt="A peaceful cat" className="rounded-3xl shadow-xl w-full aspect-[4/5] object-cover" />
           </div>
        </div>
      </Section>

      {/* 12. Pricing & The 3 Questions */}
      <Section className="bg-white">
        <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-4">The membership</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
          aēv Longevity Package for <em className="text-brand-teal not-italic">dogs and cats</em> starting at age 3.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-charcoal text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
             <div className="flex items-baseline gap-3 mb-2">
               <span className="font-serif text-5xl line-through decoration-white/50 font-light">$699</span>
               <span className="font-sans text-sm opacity-50">/ year / pet</span>
             </div>
             <p className="text-sm opacity-50 mb-8">Discounted rate for founding members</p>
             <div className="h-px bg-white/10 w-full mb-8"></div>
             
             <ul className="space-y-4">
               {[
                 "Two comprehensive testing panels per year — tracking 90+ health signals",
                 "Comprehensive vet visits with full physical exam and oral health assessment",
                 "At-home behavioral and habit questionnaire",
                 "AI-powered clinical report with Health Potential Metrics and personalized recommendations",
                 "Full pet data ownership in the app",
                 "Seamless integration and sharing with your veterinarian",
                 "Trend tracking across panels — see if you are improving"
               ].map((item, i) => (
                 <li key={i} className="flex gap-4">
                   <Check className="text-brand-teal shrink-0 mt-1" size={16} />
                   <span className="font-sans text-sm opacity-80">{item}</span>
                 </li>
               ))}
             </ul>
             
             <div className="mt-10 bg-white/10 p-6 rounded-2xl">
                <p className="font-semibold text-sm mb-2">Founding Cohort — Priority Access</p>
                <p className="text-xs opacity-60">Founding members receive priority access and a special discounted rate when we launch in Summer 2026. <em className="text-white">Limited spots available.</em></p>
             </div>
             <a href="/waitlist" className="w-full block text-center bg-brand-teal text-white py-4 rounded-full font-semibold text-sm mt-6">
               Join the Founding Waitlist
             </a>
          </div>
          
          <div className="flex flex-col justify-center lg:pl-10">
             <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-charcoal/40 text-[11px] mb-4">The investment</p>
             <h3 className="font-serif text-3xl md:text-4xl font-medium mb-10">Three questions aēv helps you answer.</h3>
             
             <div className="space-y-8">
               <div className="border-l-2 border-brand-teal pl-6">
                 <p className="font-sans font-semibold text-lg mb-2">Is my dog/cat healthy?</p>
                 <p className="font-sans opacity-70 text-sm leading-relaxed">Comprehensive testing reveals what's happening beneath the surface — before symptoms appear.</p>
               </div>
               <div className="border-l-2 border-brand-teal pl-6">
                 <p className="font-sans font-semibold text-lg mb-2">Can I improve its health?</p>
                 <p className="font-sans opacity-70 text-sm leading-relaxed">Trend tracking shows whether things are moving in the right direction, panel over panel.</p>
               </div>
               <div className="border-l-2 border-brand-teal pl-6">
                 <p className="font-sans font-semibold text-lg mb-2">What actions do I need to take?</p>
                 <p className="font-sans opacity-70 text-sm leading-relaxed">Clear, actionable recommendations your vet can act on — not just data, but direction.</p>
               </div>
             </div>
             <p className="font-sans text-sm opacity-60 mt-10 italic">
               Practicing preventative care often means simpler interventions instead of costly emergencies later, more quality years with energy and mobility, and less anxiety for your family.
             </p>
          </div>
        </div>
      </Section>

      {/* 14. The Team & Advisory Board */}
      <Section className="bg-brand-oat">
        <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-4">The Team</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Built with <em className="text-brand-teal not-italic">veterinary expertise.</em>
        </h2>
        <p className="font-sans text-lg opacity-70 mb-16 max-w-2xl">A dedicated team combining clinical veterinary science, academic research, and technology to deliver practical pet health intelligence.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
             <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-8">Advisory Board</p>
             <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-24 h-24 rounded-2xl bg-brand-charcoal/10 shrink-0"></div>
                 <div>
                   <h3 className="font-serif text-xl font-bold">Dr. Hillary Israeli</h3>
                   <p className="font-sans text-sm text-brand-teal font-medium mb-1">Advisory Board</p>
                   <p className="font-sans text-xs opacity-50 uppercase tracking-widest mb-2">VMD</p>
                   <p className="font-sans text-sm opacity-75">Medical Director, Ivens Bronstein Veterinary Hospital.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-24 h-24 rounded-2xl bg-brand-charcoal/10 shrink-0"></div>
                 <div>
                   <h3 className="font-serif text-xl font-bold">Dr. Carlo Siracusa</h3>
                   <p className="font-sans text-sm text-brand-teal font-medium mb-1">Advisory Board</p>
                   <p className="font-sans text-xs opacity-50 uppercase tracking-widest mb-2">DVM, PhD, Dip. ACVB, Dip. ECAWBM</p>
                   <p className="font-sans text-sm opacity-75">Professor of Clinical Animal Behavior & Welfare at the University of Pennsylvania School of Veterinary Medicine.</p>
                 </div>
               </div>
             </div>
           </div>
           
           <div>
             <p className="font-sans font-semibold uppercase tracking-[0.2em] text-brand-teal text-xs mb-8">The Team</p>
             <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-24 h-24 rounded-2xl bg-brand-charcoal/10 shrink-0"></div>
                 <div>
                   <h3 className="font-serif text-xl font-bold">Ronen Cohen</h3>
                   <p className="font-sans text-sm text-brand-teal font-medium mb-2">Founder & CEO</p>
                   <p className="font-sans text-sm opacity-75 line-clamp-3">20+ years in executive roles at GE, Suez, and clean tech startups — building, scaling, and turning around complex industrial businesses across the full capital stack. Now channeling that same rigor into the problem closest to home: keeping the dogs and cats we love healthier, for longer.</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-24 h-24 rounded-2xl bg-brand-charcoal/10 shrink-0"></div>
                 <div>
                   <h3 className="font-serif text-xl font-bold">Lev Zhitnik</h3>
                   <p className="font-sans text-sm text-brand-teal font-medium mb-2">Technical Co-Founder</p>
                   <p className="font-sans text-sm opacity-75 line-clamp-3">Full-stack & AI engineer, MIT-certified applied data scientist. Co-founded a Gen AI urban planning startup serving 100K+ residents, built and shipped multiple SaaS products. Now building AevArk's technical backbone — for the pets he wished he had more time with.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </Section>

      {/* 15. Final CTA */}
      <Section dark className="bg-brand-charcoal text-center py-24">
        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
          They show up for us every day.<br />
          <em className="text-brand-teal not-italic">aēv helps them stay.</em>
        </h2>
        <p className="font-sans opacity-70 mb-10 text-sm max-w-sm mx-auto">Limited founding cohort spots. Early members get a discounted rate. Launching Summer 2026.</p>
        <a href="/waitlist" className="bg-brand-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all inline-block shadow-lg">
          Join the Founding Cohort
        </a>
      </Section>

      {/* 16. Standard Legal Footer */}
      <footer className="bg-brand-charcoal text-white pt-16 pb-10 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-4xl tracking-tight font-medium mb-4">aēv</div>
            <p className="font-sans opacity-60 max-w-sm text-sm">They show up for us every day. AevArk helps them stay.</p>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs font-semibold mb-6 text-white/50">Science</h4>
            <ul className="space-y-4 font-sans text-sm opacity-80">
              <li><a href="#" className="hover:text-brand-teal">The Protocol</a></li>
              <li><a href="#" className="hover:text-brand-teal">Markers</a></li>
              <li><a href="#" className="hover:text-brand-teal">Lab Network</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans uppercase tracking-widest text-xs font-semibold mb-6 text-white/50">Company</h4>
            <ul className="space-y-4 font-sans text-sm opacity-80">
              <li><a href="#about" className="hover:text-brand-teal">About</a></li>
              <li><a href="#" className="hover:text-brand-teal">Partners</a></li>
              <li><a href="#" className="hover:text-brand-teal">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center font-sans text-xs opacity-40">
          <p className="mb-4">AevArk health reports are for informational purposes only and do not constitute veterinary advice. Always consult a licensed veterinarian.</p>
          <p>© 2026 AevArk, Inc. All rights reserved.</p>
        </div>
      </footer>
      
    </main>
  )
}

