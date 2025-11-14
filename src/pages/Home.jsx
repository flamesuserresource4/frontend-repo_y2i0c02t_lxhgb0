import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();
  function onSearch(filters){
    const qs = new URLSearchParams(filters).toString();
    navigate(`/search?${qs}`);
  }
  return (
    <main>
      <Hero/>
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SearchBar onSearch={onSearch}/>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Popular picks</h2>
        <p className="text-slate-600 mt-2">Curated destinations and tours to get you started</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Rajasthan Desert Tour","Varanasi Spiritual Walk","Himalayan Trek"].map((t,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-orange-200 to-pink-200"/>
              <div className="p-4">
                <div className="font-semibold text-slate-800">{t}</div>
                <div className="text-sm text-slate-600 mt-1">From ₹{(8999 + i*2000).toLocaleString("en-IN")}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
