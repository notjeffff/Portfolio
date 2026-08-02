import { motion } from "framer-motion"
import { Activity, Map, LayoutDashboard, Target, Video, AlertTriangle } from "lucide-react"

export function SpotHoleMockup() {
  return (
    <div className="w-full aspect-video bg-zinc-950 flex overflow-hidden select-none group/mockup relative">
      {/* Sidebar */}
      <div className="w-12 md:w-16 h-full bg-zinc-900 border-r border-white/5 flex flex-col items-center py-4 gap-6 shrink-0 z-10">
        <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center mb-4">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <LayoutDashboard className="w-5 h-5 text-primary/80 cursor-pointer" />
        <Map className="w-5 h-5 text-muted-foreground hover:text-white transition-colors cursor-pointer" />
        <Video className="w-5 h-5 text-muted-foreground hover:text-white transition-colors cursor-pointer" />
        <div className="mt-auto">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-zinc-950 p-2 md:p-4 gap-2 md:gap-4 overflow-hidden relative">
        {/* Top Navbar */}
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-2">
            <h4 className="text-xs md:text-sm font-semibold text-zinc-100 tracking-wide">Live Inference Dashboard</h4>
            <span className="flex items-center gap-1 bg-emerald-500/10 text-emerald-500 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Connected
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono">14 FPS | 42ms ping</span>
        </div>

        {/* Dashboard Grid */}
        <div className="flex-1 grid grid-cols-3 gap-2 md:gap-4 h-full">
          {/* Main Camera Feed */}
          <div className="col-span-2 row-span-2 rounded-lg border border-white/5 bg-zinc-900 relative overflow-hidden group/cam">
            {/* Abstract Road Background */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-1/2 bottom-0 w-32 h-full bg-white/5 transform -translate-x-1/2 skew-x-[-20deg] blur-md" />
            <div className="absolute left-1/2 bottom-0 w-2 h-1/2 bg-yellow-500/20 transform -translate-x-1/2 blur-[1px] border-l border-dashed border-yellow-500/50" />
            
            {/* Bounding Box 1 */}
            <motion.div 
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="absolute top-1/3 left-1/4 w-16 h-12 md:w-24 md:h-16 border-2 border-red-500 bg-red-500/10"
            >
              <div className="absolute -top-4 left-[-2px] bg-red-500 text-white text-[8px] px-1 font-mono">
                pothole 0.94
              </div>
            </motion.div>

            {/* Bounding Box 2 */}
            <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.8 }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", delay: 1 }}
              className="absolute bottom-1/4 right-1/4 w-12 h-8 md:w-16 md:h-12 border-2 border-orange-500 bg-orange-500/10"
            >
              <div className="absolute -top-4 left-[-2px] bg-orange-500 text-white text-[8px] px-1 font-mono">
                pothole 0.72
              </div>
            </motion.div>
            
            {/* HUD Elements */}
            <div className="absolute top-2 left-2 flex gap-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[8px] text-zinc-400 font-mono">REC</span>
            </div>
            <div className="absolute bottom-2 left-2 text-[8px] text-zinc-500 font-mono">CAM_01_FRONT</div>
            
            {/* Scanning line animation */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              className="absolute left-0 right-0 h-px bg-primary/30 blur-[1px] z-20 shadow-[0_0_8px_rgba(var(--primary),0.8)]"
            />
          </div>

          {/* Interactive Map */}
          <div className="col-span-1 row-span-1 rounded-lg border border-white/5 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-2">
             {/* Map styling */}
             <div className="absolute inset-0 bg-[#0f1115]" />
             {/* Fake streets */}
             <div className="absolute w-[150%] h-4 bg-zinc-800/50 rotate-45" />
             <div className="absolute w-4 h-[150%] bg-zinc-800/50 -rotate-12" />
             <div className="absolute w-full h-3 bg-zinc-800/50 top-1/3" />
             
             {/* Pothole Markers */}
             <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
             </div>
             <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse delay-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
             </div>
             <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
             </div>

             <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] text-zinc-400 font-mono flex items-center gap-1 border border-white/10">
                <Map className="w-2 h-2" /> Live Map
             </div>
          </div>

          {/* Analytics Cards */}
          <div className="col-span-1 row-span-1 flex flex-col gap-2 md:gap-4">
            <div className="flex-1 rounded-lg border border-white/5 bg-zinc-900/80 backdrop-blur p-2 md:p-3 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-bl-full blur-xl" />
              <div className="flex items-center gap-1.5 mb-1 md:mb-2">
                <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                <span className="text-[10px] md:text-xs font-medium text-zinc-400">Total Detections</span>
              </div>
              <div className="text-xl md:text-3xl font-bold text-zinc-100 font-mono tracking-tight group-hover/mockup:text-red-400 transition-colors">
                2,481
              </div>
              <div className="text-[8px] md:text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                ↑ 12% vs last trip
              </div>
            </div>

            <div className="flex-1 rounded-lg border border-white/5 bg-zinc-900/80 backdrop-blur p-2 md:p-3 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <Activity className="w-3 h-3 text-primary/80" />
                  <span className="text-[10px] font-medium text-zinc-400">Avg Confidence</span>
                </div>
                <div className="text-lg md:text-xl font-bold text-zinc-100 font-mono">
                  89.4%
                </div>
              </div>
              {/* Mini chart */}
              <div className="flex items-end gap-0.5 h-6">
                {[40, 60, 45, 80, 65, 90, 85].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: "20%" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    className="w-1 md:w-1.5 bg-primary/40 rounded-t-sm" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium overlay gleam */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
    </div>
  )
}
