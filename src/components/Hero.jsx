import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-white/10"/>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            Discover India. Book Tours, Cars, and Unforgettable Places
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl opacity-90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
          >
            Plan your next adventure with real-time weather, smart filters, and secure checkout.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/tours" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 shadow-sm">Explore Tours</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/places" className="px-5 py-3 rounded-full bg-slate-900/70 backdrop-blur border border-white/20 hover:bg-slate-900/80 shadow-sm">Find Places</Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white"/>
    </section>
  );
}
