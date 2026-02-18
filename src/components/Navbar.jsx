import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#eef0e6]/90 backdrop-blur-lg border-b border-black/[0.03] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-[#eef0e6] py-5"
          }`}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
          <nav className="flex items-center justify-between text-neutral-900">
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/menu"
                className="font-extrabold tracking-tight text-[18px] hover:text-emerald-600 transition-colors"
              >
                Carta
              </Link>
              <Link
                to="/deals"
                className="font-extrabold tracking-tight text-[18px] hover:text-emerald-600 transition-colors"
              >
                Promos
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="shrink-0">
              <Link
                to="/"
                aria-label="Home"
                className="transition-transform duration-300 hover:scale-105 block"
              >
                <img
                  src="/images/tgb-logo.png"
                  alt="THE GOOD BURGER"
                  className="h-7 sm:h-8 md:h-10"
                />
              </Link>
            </div>

            {/* Desktop right links */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/delivery"
                className="font-extrabold tracking-tight text-[18px] hover:text-emerald-600 transition-colors"
              >
                Delivery
              </Link>
              <a
                href="https://quieroserfranquiciado.gruporestalia.com/es/tgb"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold tracking-tight text-[18px] px-5 py-2 hover:bg-black hover:text-[#eef0e6] border-2 border-black rounded-full transition-all duration-300"
              >
                Franquicia
              </a>
            </div>

            {/* Right spacer mobile */}
            <div className="md:hidden w-10" />
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_.3s_ease-out]"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#eef0e6] shadow-2xl p-8 animate-[slideIn_.3s_ease-out]">
            <div className="flex items-center justify-between mb-10">
              <img src="/images/tgb-logo.png" alt="Logo" className="h-6" />
              <button
                className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6l-12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-neutral-900">
              {[
                { name: "Carta", path: "/menu" },
                { name: "Promos", path: "/deals" },
                { name: "Delivery", path: "/delivery" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-2xl font-black tracking-tighter hover:text-emerald-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://quieroserfranquiciado.gruporestalia.com/es/tgb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black tracking-tighter hover:text-emerald-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Abre tu franquicia
              </a>
            </nav>
            <div className="absolute bottom-10 left-8 right-8">
              <Link
                to="/menu"
                className="w-full flex justify-center items-center h-14 bg-black text-[#eef0e6] font-extrabold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                PIDE AHORA
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideIn { from { transform: translateX(100%) } to { transform: translateX(0) } }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </>
  );
}
