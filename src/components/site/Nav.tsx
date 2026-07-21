import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Logo({ className = "h-11" }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Kanoonify home">
      <img
        src="/kanoonify-logo.jpeg"
        alt="Kanoonify"
        className={`${className} w-auto rounded-xl object-contain shadow-[var(--shadow-soft)]`}
        draggable={false}
      />
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:pointer-events-none after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-border shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between md:h-24">
        <Logo className="h-11 md:h-12" />
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={linkClass}
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground font-semibold after:scale-x-100" }}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={linkClass}
            activeProps={{ className: "text-foreground font-semibold after:scale-x-100" }}
          >
            Features
          </Link>
          <Link
            to="/contact"
            className={linkClass}
            activeProps={{ className: "text-foreground font-semibold after:scale-x-100" }}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_6px_18px_-6px_rgba(255,107,0,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_14px_30px_-8px_rgba(255,107,0,0.6)] active:translate-y-0"
          >
            Request Demo
          </Link>
        </div>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page flex flex-col gap-1 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground">Home</Link>
            <Link to="/features" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground">Features</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground">Contact</Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_6px_18px_-6px_rgba(255,107,0,0.55)]"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
