import { useEffect, useState } from "react";
import { api } from "../api";

export default function Account(){
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.me().then(setMe).catch(()=>setMe(null)).finally(()=>setLoading(false));
  },[]);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-slate-900">Account</h1>
      {loading && <div className="mt-4 text-slate-600">Loading…</div>}
      {!loading && !me && <div className="mt-4">You're not logged in.</div>}
      {me && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="font-semibold">{me.name}</div>
          <div className="text-slate-600 text-sm">{me.email}</div>
        </div>
      )}
    </main>
  );
}
