import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, formatINR } from "../api";

export default function CarDetails(){
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=>{
    api.getCar(id).then(setCar).catch((e)=>setError(e.message)).finally(()=>setLoading(false));
  },[id]);

  if (loading) return <main className="p-8">Loading…</main>;
  if (error) return <main className="p-8 text-red-600">{error}</main>;
  if (!car) return <main className="p-8">Not found</main>;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-900">{car.name}</h1>
      <div className="text-slate-600 mt-2">{formatINR(car.price_per_day)}/day · {car.seats} seats · {car.transmission}</div>
      <div className="mt-6 h-64 bg-slate-100 rounded-2xl"/>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-semibold text-slate-800">Features</h2>
          <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
            {car.features?.map((f,idx)=> <li key={idx}>{f}</li>)}
          </ul>
        </div>
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 p-4 bg-white">
            <button className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Rent this car</button>
          </div>
        </aside>
      </section>
    </main>
  );
}
