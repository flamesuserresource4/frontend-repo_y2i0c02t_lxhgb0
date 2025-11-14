import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, formatINR } from "../api";

export default function Tours(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.getTours({}).then(setItems).catch(()=>setItems([])).finally(()=>setLoading(false));
  },[]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Tours</h1>
      {loading && <div className="mt-6 text-slate-600">Loading…</div>}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t)=> (
          <Link key={t.slug} to={`/tours/${t.slug}`} className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition">
            <div className="h-40 bg-gradient-to-br from-amber-200 to-rose-200"/>
            <div className="p-4">
              <div className="font-semibold text-slate-800">{t.title}</div>
              <div className="text-sm text-slate-600 mt-1">{formatINR(t.price)}</div>
            </div>
          </Link>
        ))}
        {!items.length && !loading && <div className="text-slate-500">No tours yet</div>}
      </div>
    </main>
  );
}
