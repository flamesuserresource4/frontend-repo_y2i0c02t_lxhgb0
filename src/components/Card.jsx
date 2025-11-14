import { motion } from "framer-motion";

export function Card({ className = "", children, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardMedia({ className = "", children }){
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/15 pointer-events-none"/>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }){
  return (
    <div className={`p-4 ${className}`}>{children}</div>
  );
}
