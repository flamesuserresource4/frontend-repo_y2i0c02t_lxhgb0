import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { api, formatINR } from "../api";
import Loader from "../components/Loader";
import { SkeletonCard } from "../components/Skeleton";
import { Card, CardContent } from "../components/Card";

export default function Search(){
  const [sp] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({ places: [], tours: [], cars: [] });
  const [error, setError] = useState("");

  useEffect(()=>{
    const q = Object.fromEntries(sp.entries());
    async function run(){
      setLoading(true); setError("");
      try {
        const [places, tours, cars] = await Promise.all([
          api.getPlaces(q).catch(()=>[]),
          api.getTours(q).catch(()=>[]),
          api.getCars(q).catch(()=>[]),
        ]);
        setResults({ places, tours, cars });
      } catch (e) {
        setError(e.message || "Failed to search");
      } finally { setLoading(false); }
    }
    run();
  }, [sp]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Search results</h1>
      {loading && <div className="mt-6"><Loader label="Fetching"/></div>}
      {error && <div className="mt-6 text-red-600">{error}</div>}

      <section className="mt-8">
        <h2 className="font-semibold text-slate-800">Tours</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? Array.from({ length: 3 }).map((_,i)=>(<SkeletonCard key={i}/>)) :
            results.tours?.map((t)=> (
              <Link key={t.slug} to={`/tours/${t.slug}`}>
                <Card>
                  <div className="h-40 bg-gradient-to-br from-amber-200 to-rose-200"/>
                  <CardContent>
                    <div className="font-semibold text-slate-800">{t.title}</div>
                    <div className="text-sm text-slate-600 mt-1">{formatINR(t.price)}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          {!results.tours?.length && !loading && <div className="text-slate-500">No tours found</div>}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold text-slate-800">Places</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? Array.from({ length: 3 }).map((_,i)=>(<SkeletonCard key={i}/>)) :
            results.places?.map((p)=> (
              <Link key={p.slug} to={`/places/${p.slug}`}>
                <Card>
                  <div className="h-40 bg-gradient-to-br from-sky-200 to-emerald-200"/>
                  <CardContent>
                    <div className="font-semibold text-slate-800">{p.name}</div>
                    <div className="text-sm text-slate-600 mt-1 capitalize">{p.category}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          {!results.places?.length && !loading && <div className="text-slate-500">No places found</div>}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-semibold text-slate-800">Cars</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? Array.from({ length: 3 }).map((_,i)=>(<SkeletonCard key={i}/>)) :
            results.cars?.map((c)=> (
              <Link key={c._id || c.id} to={`/cars/${c._id || c.id}`}>
                <Card>
                  <div className="h-40 bg-gradient-to-br from-indigo-200 to-fuchsia-200"/>
                  <CardContent>
                    <div className="font-semibold text-slate-800">{c.name}</div>
                    <div className="text-sm text-slate-600 mt-1">{formatINR(c.price_per_day)}/day</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          {!results.cars?.length && !loading && <div className="text-slate-500">No cars found</div>}
        </div>
      </section>
    </main>
  );
}
