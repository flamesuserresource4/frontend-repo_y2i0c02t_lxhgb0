import { Link, NavLink } from "react-router-dom";
import { Menu, MapPin, Car, CalendarFold, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-slate-800 text-lg">ExploreIndia</Link>

        <nav className="hidden md:flex gap-6 text-slate-700">
          <NavLink to="/places" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 ${isActive?"text-slate-900 font-semibold":""}`}><MapPin size={18}/>Places</NavLink>
          <NavLink to="/tours" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 ${isActive?"text-slate-900 font-semibold":""}`}><CalendarFold size={18}/>Tours</NavLink>
          <NavLink to="/cars" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 ${isActive?"text-slate-900 font-semibold":""}`}><Car size={18}/>Cars</NavLink>
          <NavLink to="/search" className={({isActive})=>`flex items-center gap-2 hover:text-slate-900 ${isActive?"text-slate-900 font-semibold":""}`}><Search size={18}/>Search</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/account" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition">
            <User size={16}/> Account
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu size={20}/>
          </button>
        </div>
      </div>
    </header>
  );
}
