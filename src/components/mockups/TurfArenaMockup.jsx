import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Search, CheckCircle2, ChevronRight, Menu } from "lucide-react"

export function TurfArenaMockup() {
  return (
    <div className="w-full aspect-video bg-[#0f172a] flex flex-col overflow-hidden select-none group/mockup relative">
      
      {/* Top Navbar */}
      <div className="h-8 md:h-12 border-b border-white/5 bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-3 md:px-6 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 md:w-6 md:h-6 rounded bg-emerald-500 flex items-center justify-center">
             <div className="w-2 h-2 md:w-3 md:h-3 border-2 border-white rounded-sm" />
          </div>
          <span className="text-[10px] md:text-sm font-bold text-white tracking-tight">TurfArena</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-300">
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Venues</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors">Bookings</span>
          <div className="w-6 h-6 rounded-full bg-slate-700" />
        </div>
        <Menu className="w-4 h-4 text-slate-300 md:hidden" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* Left Side: Turf Listing & Calendar */}
        <div className="flex-1 flex flex-col p-2 md:p-4 gap-2 md:gap-4 overflow-hidden border-r border-white/5 bg-slate-900/30">
          
          {/* Search/Filter Bar */}
          <div className="flex items-center gap-2 bg-slate-800/80 rounded-lg p-1.5 md:p-2 border border-white/5 shrink-0">
            <Search className="w-3 h-3 md:w-4 md:h-4 text-slate-400 ml-1" />
            <div className="flex-1 text-[8px] md:text-xs text-slate-400">Search venues in Chennai...</div>
            <div className="bg-emerald-500 text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-1 rounded">Find</div>
          </div>

          {/* Turf Card */}
          <div className="flex gap-3 bg-slate-800/60 border border-white/5 rounded-xl p-2 md:p-3 shrink-0 relative overflow-hidden group/card hover:bg-slate-800/90 transition-colors cursor-pointer">
             <div className="w-16 md:w-24 aspect-square bg-emerald-900/40 rounded-lg border border-emerald-500/20 flex flex-col items-center justify-center relative overflow-hidden shrink-0">
               {/* Abstract field lines */}
               <div className="absolute inset-2 border border-emerald-500/30 rounded-sm" />
               <div className="absolute w-full h-px bg-emerald-500/30 top-1/2 -translate-y-1/2" />
               <div className="absolute w-4 h-4 md:w-6 md:h-6 border border-emerald-500/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             </div>
             <div className="flex flex-col justify-between flex-1 py-0.5 md:py-1">
               <div>
                 <h4 className="text-xs md:text-sm font-bold text-slate-100 mb-0.5 md:mb-1 group-hover/card:text-emerald-400 transition-colors">Premium Football Turf</h4>
                 <div className="flex items-center gap-1 text-[8px] md:text-[10px] text-slate-400 mb-1 md:mb-2">
                   <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3" /> Velachery, Chennai
                 </div>
               </div>
               <div className="flex items-center justify-between">
                 <div className="text-[10px] md:text-xs font-bold text-emerald-400">₹1,200 <span className="text-slate-500 font-normal text-[8px] md:text-[10px]">/hr</span></div>
                 <div className="flex text-amber-400 text-[8px] md:text-[10px]">★★★★<span className="text-slate-600">★</span></div>
               </div>
             </div>
          </div>

          {/* Calendar Widget */}
          <div className="flex-1 bg-slate-800/40 border border-white/5 rounded-xl p-2 md:p-3 flex flex-col overflow-hidden">
             <div className="flex items-center justify-between mb-2">
               <span className="text-[10px] md:text-xs font-medium text-slate-200 flex items-center gap-1"><Calendar className="w-3 h-3 text-emerald-400"/> Select Date</span>
               <span className="text-[8px] md:text-[10px] text-slate-400">August 2026</span>
             </div>
             <div className="grid grid-cols-7 gap-1 text-center text-[8px] md:text-[10px] mb-1 text-slate-500">
               {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
             </div>
             <div className="grid grid-cols-7 gap-1 text-center text-[10px] md:text-xs flex-1">
               {Array.from({length: 14}).map((_, i) => {
                 const day = i + 1;
                 const isSelected = day === 5;
                 return (
                   <div key={i} className={`flex items-center justify-center rounded-md ${isSelected ? 'bg-emerald-500 text-white font-bold' : 'text-slate-300 hover:bg-slate-700 cursor-pointer'}`}>
                     {day}
                   </div>
                 )
               })}
             </div>
          </div>

        </div>

        {/* Right Side: Slot Selection & Checkout */}
        <div className="w-1/3 md:w-64 flex flex-col bg-slate-900/60 p-2 md:p-4 gap-2 md:gap-4 z-10 relative">
          
          <h4 className="text-[10px] md:text-xs font-medium text-slate-200 flex items-center gap-1 mb-1 md:mb-2">
            <Clock className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" /> Time Slots
          </h4>
          
          <div className="grid grid-cols-1 gap-1.5 md:gap-2 flex-1 overflow-hidden">
            {[
              { time: "05:00 PM", status: "booked" },
              { time: "06:00 PM", status: "booked" },
              { time: "07:00 PM", status: "available", selected: true },
              { time: "08:00 PM", status: "available" },
              { time: "09:00 PM", status: "available" }
            ].map((slot, i) => (
              <motion.div 
                key={i}
                whileHover={slot.status === 'available' ? { scale: 1.02 } : {}}
                className={`flex items-center justify-between p-1.5 md:p-2 rounded-lg border text-[8px] md:text-[10px] font-medium transition-all
                  ${slot.status === 'booked' ? 'bg-slate-800/30 border-white/5 text-slate-600 opacity-50' : 
                    slot.selected ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 
                    'bg-slate-800 border-white/10 text-slate-300 hover:border-emerald-500/50 cursor-pointer'
                  }
                `}
              >
                <span>{slot.time}</span>
                {slot.selected ? <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> : null}
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-auto bg-emerald-500 text-white rounded-lg p-2 flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            Confirm Booking <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </motion.div>

        </div>
        
        {/* Shadow gradient for depth */}
        <div className="absolute inset-y-0 right-1/3 md:right-64 w-8 bg-gradient-to-l from-slate-900/60 to-transparent pointer-events-none" />
      </div>
      
      {/* Overlay gleam */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none" />
    </div>
  )
}
