import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            Discover India. Book Tours, Cars, and Unforgettable Places
          </h1>
          <p className="mt-5 text-lg sm:text-xl opacity-90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            Plan your next adventure with real-time weather, smart filters, and secure checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/tours" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100">Explore Tours</Link>
            <Link to="/places" className="px-5 py-3 rounded-full bg-slate-900/70 backdrop-blur border border-white/20 hover:bg-slate-900/80">Find Places</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
