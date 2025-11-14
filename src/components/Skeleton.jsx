export function Skeleton({ className = "h-4 w-full" }){
  return <div className={`animate-pulse rounded-md bg-slate-200/70 ${className}`}/>;
}

export function SkeletonCard(){
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm p-4">
      <div className="h-40 w-full rounded-xl bg-slate-200/70 animate-pulse"/>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-2/3"/>
        <Skeleton className="h-4 w-1/3"/>
      </div>
    </div>
  );
}
