import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MapPin, Car, CalendarFold, Search, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 border-b ${scrolled ? "backdrop-blur bg-white/70 border-slate-200/70 shadow-sm" : "bg-white/40 backdrop-blur border-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-slate-900 text-lg tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-600">Explore</span>India
        </Link>

        <nav className="hidden md:flex gap-6 text-slate-700">
          <NavLink to="/places" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 transition ${isActive?"text-slate-900 font-semibold":"")}`}><MapPin size={18}/>Places</NavLink>
          <NavLink to="/tours" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 transition ${isActive?"text-slate-900 font-semibold":"")}`}><CalendarFold size={18}/>Tours</NavLink>
          <NavLink to="/cars" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 transition ${isActive?"text-slate-900 font-semibold":"")}`}><Car size={18}/>Cars</NavLink>
          <NavLink to="/search" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 transition ${isActive?"text-slate-900 font-semibold":"")}`}><Search size={18}/>Search</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/account" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
            <User size={16}/> Account
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={()=>setOpen(true)} aria-label="Open menu">
            <Menu size={20}/>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-black/30"
            onClick={()=>setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="ml-auto h-full w-80 bg-white shadow-xl p-6 flex flex-col"
              onClick={(e)=>e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-900">Menu</div>
                <button onClick={()=>setOpen(false)} className="p-2 rounded-md hover:bg-slate-100" aria-label="Close menu"><X size={18}/></button>
              </div>
              <div className="mt-6 grid gap-3 text-slate-700">
                <Link to="/places" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50"><MapPin size={18}/> Places</Link>
                <Link to="/tours" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50"><CalendarFold size={18}/> Tours</Link>
                <Link to="/cars" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50"><Car size={18}/> Cars</Link>
                <Link to="/search" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 p-3 rounded-xl hover:bg-slate-50"><Search size={18}/> Search</Link>
                <Link to="/account" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900 text-white"><User size={18}/> Account</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
