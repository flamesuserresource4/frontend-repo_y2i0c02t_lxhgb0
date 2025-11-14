export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ExploreIndia. All rights reserved.</p>
        <nav className="flex gap-4">
          <a className="hover:text-slate-700" href="#">Privacy</a>
          <a className="hover:text-slate-700" href="#">Terms</a>
          <a className="hover:text-slate-700" href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}
