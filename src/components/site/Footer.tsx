import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/kanoonify-logo.jpeg" alt="Kanoonify" className="h-12 w-12 rounded-xl object-contain shadow-[var(--shadow-soft)]" />
              <span className="font-display text-2xl font-bold text-primary">Kanoonify</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              India's modern legal operating system for advocates and clients. Manage cases, hearings and collaboration — all in one place.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@kanoonify.app</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 90000 00000</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background hover:border-primary hover:text-primary transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Kanoonify. All rights reserved.</p>
          <p>Making Legal Case Management Simple, Connected & Digital.</p>
        </div>
      </div>
    </footer>
  );
}
