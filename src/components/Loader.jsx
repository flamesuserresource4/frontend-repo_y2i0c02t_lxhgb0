export default function Loader({ label = "Loading" }){
  return (
    <div className="flex items-center gap-2 text-slate-600">
      <span className="relative inline-flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></span>
      </span>
      <span>{label}…</span>
    </div>
  );
}
