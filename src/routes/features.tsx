import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Calendar,
  Search,
  Handshake,
  FileText,
  Bell,
  Shield,
  UsersRound,
  Lock,
  KeyRound,
  Cloud,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Kanoonify" },
      { name: "description", content: "Everything you need to manage legal matters digitally: case management, hearings, document generation, collaboration and secure records." },
      { property: "og:title", content: "Features — Kanoonify" },
      { property: "og:description", content: "Explore Kanoonify's legal case management, hearing timeline, advocate collaboration and secure document tools." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Blocks />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(900px 400px at 50% -10%, rgba(255,107,0,0.10), transparent 60%)",
        }}
      />
      <div className="container-page py-16 md:py-20 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            Features
          </div>
          <h1 className="mx-auto mt-5 max-w-5xl font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">Everything You Need to Manage</span>
            <span className="block">Legal Matters Digitally</span>
          </h1>
          <p className="mx-auto mt-6 max-w-5xl text-base text-muted-foreground md:text-lg lg:whitespace-nowrap">
            A complete toolkit for advocates and clients — from digital case tracking to secure cloud storage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const featureBlocks = [
  {
    icon: Briefcase,
    tag: "Case Files",
    title: "Case Management",
    description: "Complete digital case tracking with structured records, notes and history — accessible from anywhere.",
    bullets: ["Digital case files", "Party & lawyer details", "Status history", "Attach documents"],
  },
  {
    icon: Calendar,
    tag: "Hearings",
    title: "Court Hearing Management",
    description: "A hearing timeline with automatic reminders so you're always court-ready.",
    bullets: ["Timeline view", "SMS & push reminders", "Hearing notes", "Reschedule tracking"],
  },
  {
    icon: Search,
    tag: "Discovery",
    title: "Lawyer Discovery",
    description: "Search verified advocates across India by city, court and area of expertise.",
    bullets: ["Verified profiles", "Filter by expertise", "Court-level search", "Direct connect"],
  },
  {
    icon: Handshake,
    tag: "Collaboration",
    title: "Advocate Collaboration",
    description: "Invite multiple advocates to work on the same case with clear roles and permissions.",
    bullets: ["Multi-advocate cases", "Role-based access", "Shared notes", "Handoff support"],
  },
  {
    icon: FileText,
    tag: "Documents",
    title: "Legal Document Generation",
    description: "Generate common legal drafts in minutes with templated tools.",
    bullets: ["Exemption", "Summoning", "Gate Pass", "Export as PDF"],
  },
  {
    icon: Bell,
    tag: "Reminders",
    title: "Notifications",
    description: "Never miss court dates, filings or client messages with smart reminders.",
    bullets: ["Hearing alerts", "Task reminders", "Client updates", "Daily digest"],
  },
  {
    icon: UsersRound,
    tag: "Access Control",
    title: "Role-based Access",
    description: "Separate experiences tailored for advocates and clients, on the same platform.",
    bullets: ["Advocate workspace", "Client portal", "Granular permissions", "Audit logs"],
  },
];

function Blocks() {
  return (
    <section className="py-8 md:py-12">
      <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-6">
        {featureBlocks.map(({ icon: Icon, tag, title, description, bullets }, i) => {
          const isLast = i === featureBlocks.length - 1;
          return (
            <Reveal
              key={title}
              delay={(i % 3) * 80}
              className={`lg:col-span-2 ${isLast ? "lg:col-start-3" : ""}`}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-background p-8 md:p-10 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_32px_64px_-16px_rgba(255,107,0,0.15)]">
                {/* Top accent bar */}
                <div
                  aria-hidden
                  className="absolute left-10 top-0 h-1.5 w-16 rounded-b-full bg-primary transition-all duration-500 group-hover:w-24"
                />

                {/* Icon + category */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                    {tag}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </p>

                <ul className="mt-8 space-y-3.5 border-t border-border/60 pt-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-3 w-3 text-primary" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}


function Security() {
  const items = [
    { icon: KeyRound, t: "OTP Login", d: "Secure mobile-based authentication." },
    { icon: Lock, t: "Encrypted Data", d: "End-to-end encryption for legal records." },
    { icon: Cloud, t: "Secure Cloud", d: "Modern architecture with backups and DR." },
    { icon: Rocket, t: "Scalable Platform", d: "100,000+ users ready from day one." },
  ];
  return (
    <section className="mt-8 border-y border-border bg-surface py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary">
            <Shield className="h-3.5 w-3.5" /> Security
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Built with government-grade reliability
          </h2>
          <p className="mt-4 text-base text-muted-foreground lg:whitespace-nowrap">
            Your practice data is protected with encryption, secure infrastructure and role-based controls.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-base font-semibold">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary-dark p-10 text-center text-primary-foreground md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(500px 260px at 20% 20%, rgba(255,255,255,0.45), transparent), radial-gradient(600px 320px at 80% 80%, rgba(255,255,255,0.25), transparent)",
            }}
          />
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
          <div aria-hidden className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-white/10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-4xl">See Kanoonify in Action</h2>
            <p className="mx-auto mt-3 max-w-3xl opacity-90 lg:whitespace-nowrap">
              Book a personalized walkthrough with our team and explore every feature live.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.4)]"
              >
                Request Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
