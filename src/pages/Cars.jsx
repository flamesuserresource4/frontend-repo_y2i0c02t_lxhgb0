import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, formatINR } from "../api";
import { SkeletonCard } from "../components/Skeleton";
import { Card, CardContent } from "../components/Card";

export default function Cars(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.getCars({}).then(setItems).catch(()=>setItems([])).finally(()=>setLoading(false));
  },[]);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Cars</h1>
      {loading && <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{Array.from({length:6}).map((_,i)=>(<SkeletonCard key={i}/>))}</div>}
      {!loading && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c)=> (
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
          {!items.length && <div className="text-slate-500">No cars yet</div>}
        </div>
      )}
    </main>
  );
}
