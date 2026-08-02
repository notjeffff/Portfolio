import { motion } from "framer-motion"
import { Activity, BarChart3, LineChart, PieChart, Users, HeartPulse } from "lucide-react"

export function WomensHealthMockup() {
  return (
    <div className="w-full aspect-video bg-slate-950 flex flex-col overflow-hidden select-none group/mockup relative p-2 md:p-4 gap-2 md:gap-4">
      
      {/* Top Header */}
      <div className="flex justify-between items-center px-1 md:px-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-teal-500/20 flex items-center justify-center">
            <HeartPulse className="w-3 h-3 md:w-4 md:h-4 text-teal-400" />
          </div>
          <div>
            <h4 className="text-[10px] md:text-sm font-semibold text-slate-100 tracking-wide leading-tight">Health Analytics Engine</h4>
            <div className="text-[8px] md:text-[10px] text-slate-400 font-mono">Dataset: 4,520 records | SMOTE Applied</div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-slate-400">
          <BarChart3 className="w-3 h-3 md:w-4 md:h-4 hover:text-white transition-colors cursor-pointer" />
          <LineChart className="w-3 h-3 md:w-4 md:h-4 hover:text-white transition-colors cursor-pointer" />
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-800 border border-white/10 ml-1" />
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex-1 grid grid-cols-12 gap-2 md:gap-4 overflow-hidden">
        
        {/* Left Column (Model Comparison & KPI) */}
        <div className="col-span-7 flex flex-col gap-2 md:gap-4 h-full">
          
          {/* KPI Cards Row */}
          <div className="flex gap-2 md:gap-4 shrink-0">
            <div className="flex-1 bg-slate-900/80 border border-white/5 rounded-lg p-2 md:p-3 relative overflow-hidden backdrop-blur">
              <div className="absolute -right-4 -top-4 w-12 h-12 bg-teal-500/10 rounded-full blur-xl" />
              <div className="text-[8px] md:text-[10px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                <TargetIcon className="w-3 h-3" /> Best Model (SVM)
              </div>
              <div className="text-sm md:text-2xl font-bold text-slate-100 font-mono group-hover/mockup:text-teal-400 transition-colors">
                0.86 <span className="text-[10px] text-slate-500 font-sans">F1</span>
              </div>
            </div>
            <div className="flex-1 bg-slate-900/80 border border-white/5 rounded-lg p-2 md:p-3 relative overflow-hidden backdrop-blur">
              <div className="text-[8px] md:text-[10px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                <Users className="w-3 h-3" /> Samples
              </div>
              <div className="text-sm md:text-2xl font-bold text-slate-100 font-mono">
                12.4k
              </div>
            </div>
          </div>

          {/* Model Comparison Chart */}
          <div className="flex-1 bg-slate-900/80 border border-white/5 rounded-lg p-2 md:p-4 flex flex-col relative overflow-hidden">
            <div className="text-[10px] md:text-xs font-medium text-slate-300 mb-2 md:mb-4">Model Performance (F1 Score)</div>
            
            <div className="flex-1 flex items-end justify-between px-2 md:px-6 gap-2">
              {[
                { name: 'LR', val: 72 },
                { name: 'KNN', val: 75 },
                { name: 'DT', val: 78 },
                { name: 'RF', val: 82 },
                { name: 'SVM', val: 86 }
              ].map((model, i) => (
                <div key={model.name} className="flex flex-col items-center gap-1 md:gap-2 w-full group/bar">
                  <div className="w-full relative flex justify-center h-16 md:h-24 bg-slate-800/30 rounded-t-sm">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${model.val}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-300 ${model.name === 'SVM' ? 'bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.4)]' : 'bg-slate-600 group-hover/bar:bg-slate-500'}`}
                    />
                  </div>
                  <div className="text-[8px] md:text-[10px] font-mono text-slate-400">{model.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Feature Importance & Heatmap) */}
        <div className="col-span-5 flex flex-col gap-2 md:gap-4 h-full">
          
          {/* Feature Importance */}
          <div className="flex-1 bg-slate-900/80 border border-white/5 rounded-lg p-2 md:p-3 flex flex-col overflow-hidden">
            <div className="text-[10px] md:text-xs font-medium text-slate-300 mb-2 md:mb-3">Feature Importance</div>
            <div className="flex flex-col gap-1.5 md:gap-2 justify-center flex-1">
              {[
                { label: 'Blood Glucose', w: '85%' },
                { label: 'BMI', w: '70%' },
                { label: 'Age', w: '55%' },
                { label: 'Blood Pressure', w: '40%' }
              ].map((feat, i) => (
                <div key={i} className="flex flex-col gap-0.5 md:gap-1">
                  <div className="flex justify-between text-[8px] md:text-[10px] text-slate-400">
                    <span>{feat.label}</span>
                  </div>
                  <div className="w-full h-1 md:h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: feat.w }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="h-full bg-blue-500/80 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Heatmap Abstract */}
          <div className="h-1/3 bg-slate-900/80 border border-white/5 rounded-lg p-2 flex flex-col overflow-hidden relative group/heat">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent)] opacity-0 group-hover/heat:opacity-100 transition-opacity" />
            <div className="text-[8px] md:text-[10px] font-medium text-slate-400 mb-1 z-10">Correlation Heatmap</div>
            <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-0.5 md:gap-1 p-1">
              {Array.from({ length: 12 }).map((_, i) => {
                // Generate some pseudo-random opacity for the heatmap effect
                const opacities = [0.1, 0.4, 0.8, 0.2, 0.9, 0.3, 0.5, 0.1, 0.6, 0.8, 0.2, 0.4];
                return (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="rounded-sm md:rounded"
                    style={{ backgroundColor: `rgba(45, 212, 191, ${opacities[i]})` }}
                  />
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Overlay gleam */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
    </div>
  )
}

// Simple fallback target icon since Lucide's Target is used but maybe I can just draw a mini one
function TargetIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}
