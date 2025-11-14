import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/Card";

export default function Home(){
  const navigate = useNavigate();
  function onSearch(filters){
    const qs = new URLSearchParams(filters).toString();
    navigate(`/search?${qs}`);
  }
  const picks = [
    { title: "Rajasthan Desert Tour", price: 10999, gradient: "from-orange-200 to-pink-200" },
    { title: "Varanasi Spiritual Walk", price: 8999, gradient: "from-rose-200 to-fuchsia-200" },
    { title: "Himalayan Trek", price: 12999, gradient: "from-sky-200 to-emerald-200" },
  ];
  return (
    <main>
      <Hero/>
      <section className="-mt-16 relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SearchBar onSearch={onSearch}/>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-slate-900">Popular picks</motion.h2>
        <p className="text-slate-600 mt-2">Curated destinations and tours to get you started</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picks.map((t,i)=> (
            <Card key={i}>
              <div className={`h-40 bg-gradient-to-br ${t.gradient}`}/>
              <CardContent>
                <div className="font-semibold text-slate-800">{t.title}</div>
                <div className="text-sm text-slate-600 mt-1">From ₹{t.price.toLocaleString("en-IN")}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
