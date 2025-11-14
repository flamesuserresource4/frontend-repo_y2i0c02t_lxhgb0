import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, formatINR } from "../api";

export default function TourDetails(){
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    api.getTour(slug).then(setTour).catch((e)=>setError(e.message)).finally(()=>setLoading(false));
  },[slug]);

  if (loading) return <main className="p-8">Loading…</main>;
  if (error) return <main className="p-8 text-red-600">{error}</main>;
  if (!tour) return <main className="p-8">Not found</main>;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-900">{tour.title}</h1>
      <div className="text-slate-600 mt-2">{formatINR(tour.price)} · {tour.duration_days} days · Max {tour.max_guests} guests</div>
      <div className="mt-6 h-64 bg-slate-100 rounded-2xl"/>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-slate-800">Itinerary</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            {tour.itinerary?.map((i,idx)=> <li key={idx}>{i}</li>)}
          </ul>
        </div>
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 p-4 bg-white">
            <div className="text-xl font-semibold">{formatINR(tour.price)}</div>
            <button className="mt-4 w-full px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Book now</button>
          </div>
        </aside>
      </section>
    </main>
  );
}
