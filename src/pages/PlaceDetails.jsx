import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { motion } from "framer-motion";

export default function PlaceDetails(){
  const { slug } = useParams();
  const [place, setPlace] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    async function run(){
      try {
        const p = await api.getPlace(slug);
        setPlace(p);
        const w = await api.getWeather(p._id || p.id).catch(()=>null);
        setWeather(w);
      } catch(e){
        setError(e.message);
      } finally { setLoading(false); }
    }
    run();
  },[slug]);

  if (loading) return <main className="p-8">Loading…</main>;
  if (error) return <main className="p-8 text-red-600">{error}</main>;
  if (!place) return <main className="p-8">Not found</main>;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-bold text-slate-900">{place.name}</motion.h1>
      <div className="text-slate-600 mt-2 capitalize">{place.category} · Best season: {place.best_season}</div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-6 h-64 bg-slate-100 rounded-2xl"/>

      {weather && (
        <section className="mt-6 rounded-2xl border border-slate-200 p-4 bg-white">
          <div className="font-semibold text-slate-800">Current Weather</div>
          <div className="text-slate-600 text-sm mt-1">{weather?.current?.summary || weather?.weather?.[0]?.description || "—"}</div>
        </section>
      )}

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-slate-800">Highlights</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            {place.highlights?.map((h,idx)=> <li key={idx}>{h}</li>)}
          </ul>
        </div>
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 p-4 bg-white">
            <div className="text-sm text-slate-500">Entry fee</div>
            <div className="text-xl font-semibold">₹{(place.entry_fee||0).toLocaleString("en-IN")}</div>
          </div>
        </aside>
      </section>
    </main>
  );
}
