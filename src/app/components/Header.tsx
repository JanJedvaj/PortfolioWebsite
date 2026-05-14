import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about",      id: "about"      },
  { label: "Skills",     href: "#skills",     id: "skills"     },
  { label: "Projects",   href: "#projects",   id: "projects"   },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact",    href: "#contact",    id: "contact"    },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass bar */}
      <div className="backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[inset_0_0.5px_0_rgba(255,255,255,0.5),0_4px_24px_rgba(0,0,0,0.04)]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-center relative">

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href, id }) => (
              <button
                key={id}
                onClick={() => handleClick(href)}
                className="relative px-4 py-1.5 text-sm rounded-full transition-colors"
                style={{ fontWeight: 500 }}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#0071E3] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-150"
                  style={{ color: active === id ? "#ffffff" : "rgba(3,2,19,0.65)" }}
                >
                  {label}
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden absolute right-6 p-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-colors hover:bg-white/30"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X className="w-5 h-5 text-[#030213]/70" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu className="w-5 h-5 text-[#030213]/70" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden backdrop-blur-xl bg-white/80 border-b border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
          >
            <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href, id }) => (
                <button
                  key={id}
                  onClick={() => handleClick(href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm transition-colors"
                  style={{
                    fontWeight: 500,
                    background: active === id ? "#0071E3" : "transparent",
                    color: active === id ? "#ffffff" : "rgba(3,2,19,0.65)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
