import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState({ category: "", difficulty: "", season: "" });

  function submit(e){
    e.preventDefault();
    onSearch?.({ q, ...filters });
  }

  return (
    <form onSubmit={submit} className="w-full rounded-2xl bg-white/90 backdrop-blur px-4 py-3 shadow-lg border border-slate-200 flex flex-col sm:flex-row gap-3">
      <div className="flex-1 flex items-center gap-2">
        <Search className="text-slate-500" size={18}/>
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search tours, places, cars..." className="w-full bg-transparent outline-none"/>
      </div>
      <div className="flex gap-2">
        <select value={filters.category} onChange={(e)=>setFilters(v=>({...v, category:e.target.value}))} className="rounded-xl border-slate-200">
          <option value="">Category</option>
          <option>historical</option>
          <option>religious</option>
          <option>museum</option>
          <option>adventure</option>
        </select>
        <select value={filters.difficulty} onChange={(e)=>setFilters(v=>({...v, difficulty:e.target.value}))} className="rounded-xl border-slate-200">
          <option value="">Difficulty</option>
          <option>easy</option>
          <option>moderate</option>
          <option>hard</option>
        </select>
        <select value={filters.season} onChange={(e)=>setFilters(v=>({...v, season:e.target.value}))} className="rounded-xl border-slate-200">
          <option value="">Season</option>
          <option>summer</option>
          <option>monsoon</option>
          <option>winter</option>
        </select>
      </div>
      <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
        <SlidersHorizontal size={16}/> Search
      </button>
    </form>
  );
}
