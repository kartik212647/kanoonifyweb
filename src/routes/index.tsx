import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Gavel,
  Scale,
  Calendar,
  FileText,
  Search,
  Bell,
  Lock,
  UserPlus,
  Briefcase,
  BellRing,
  Handshake,
  Sparkles,
  CheckCircle2,
  Zap,
  Building2,
  Rocket,
} from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import {
  PhoneFrame,
  DashboardScreen,
  FindLawyerScreen,
  HearingScreen,
  CaseDetailsScreen,
  DocumentScreen,
  ClientDashboardScreen,
} from "@/components/site/PhoneMockup";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Trust />
      <Problem />
      <Features />
      <Showcase />
      <HowItWorks />
      <WhoFor />
      <Why />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1200px 500px at 80% -10%, rgba(255,107,0,0.10), transparent 60%), radial-gradient(800px 400px at 0% 20%, rgba(230,92,0,0.06), transparent 60%)",
        }}
      />
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            India's Modern Legal Operating System
          </div>
          <h1 className="mt-5 max-w-[16ch] font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            India's Smart Legal Case Management Platform
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Kanoonify helps Advocates and Clients manage legal cases, court hearings, lawyer collaboration and legal documentation — through one secure digital platform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_24px_50px_-16px_rgba(255,107,0,0.55)]"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              Explore Features
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Bank-grade security</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Built for India</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Advocate verified</div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[3rem]"
            style={{
              background:
                "conic-gradient(from 200deg at 60% 40%, rgba(255,107,0,0.10), transparent 40%, rgba(230,92,0,0.08) 70%, transparent)",
              filter: "blur(30px)",
            }}
          />
          <div className="relative flex items-center justify-center gap-4">
            <div className="animate-float-delay hidden sm:block">
              <PhoneFrame className="scale-90 origin-bottom">
                <ClientDashboardScreen />
              </PhoneFrame>
            </div>
            <div className="animate-float">
              <PhoneFrame>
                <DashboardScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  wide = false,
  nowrapTitle = false,
  nowrapDescription = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  wide?: boolean;
  nowrapTitle?: boolean;
  nowrapDescription?: boolean;
}) {
  const maxW = wide ? "max-w-5xl" : "max-w-2xl";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${maxW}`}>
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl ${
          nowrapTitle ? "lg:whitespace-nowrap" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base text-muted-foreground ${
            nowrapDescription ? "lg:whitespace-nowrap" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Trust() {
  const items = [
    { icon: Gavel, t: "For Advocates" },
    { icon: Users, t: "For Clients" },
    { icon: Calendar, t: "Court Hearing Management" },
    { icon: Handshake, t: "Legal Collaboration" },
    { icon: ShieldCheck, t: "Secure Platform" },
  ];
  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            center
            wide
            eyebrow="Trusted"
            title="Trusted Digital Platform for India's Legal Ecosystem"
            nowrapTitle
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map(({ icon: Icon, t }, i) => (
            <Reveal key={t} delay={i * 70}>
              <div
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-semibold">{t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const pains = [
    "Missed hearing dates",
    "Manual paperwork",
    "Scattered case records",
    "Difficulty finding lawyers",
    "Poor client communication",
    "Managing multiple advocates",
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <SectionHeader
            eyebrow="The Problem"
            title="Legal Case Management Shouldn't Be Complicated."
            description="Advocates and clients across India still juggle disconnected tools, paper files and missed reminders. Kanoonify solves every challenge through one modern platform."
          />
          <Link
            to="/features"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            See how we solve it <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal as="li" key={p} delay={i * 60}>
              <div
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-medium">{p}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: Briefcase, t: "Case Management", d: "Track every legal case digitally with structured records, notes and history accessible from anywhere." },
    { icon: Calendar, t: "Court Hearing Timeline", d: "Never miss a hearing with an automated timeline and smart reminders across every matter." },
    { icon: Search, t: "Find Lawyers Across India", d: "Search verified advocates by city, court and area of expertise, all from one place." },
    { icon: Handshake, t: "Advocate Collaboration", d: "Invite multiple advocates to work on the same case with clear roles and shared notes." },
    { icon: FileText, t: "Legal Document Generation", d: "Generate professional legal drafts instantly using clean templated tools." },
    { icon: Users, t: "Client Case Tracking", d: "Keep clients informed with real-time updates on every step of their matter." },
    { icon: Bell, t: "Smart Notifications", d: "Receive reminders before every hearing, filing and important client update." },
    { icon: Lock, t: "Secure Legal Records", d: "All information stays safely organized with encryption and role-based access controls." },
  ];
  return (
    <section className="bg-surface py-16 md:py-24 border-y border-border">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            center
            wide
            eyebrow="Features"
            title="Everything a Modern Legal Practice Needs"
            description="From intake to hearing to document generation, Kanoonify covers your entire workflow."
            nowrapTitle
            nowrapDescription
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7">
          {feats.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 2) * 90}>
              <div className="group relative flex h-full items-start gap-5 overflow-hidden rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)] md:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/15"
                />
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg font-semibold leading-tight">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            center
            wide
            eyebrow="App Showcase"
            title="Designed for Advocates, Loved by Clients"
            description="Peek into a few screens from the Kanunify app."
            nowrapTitle
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10 place-items-center">
          {[
            { S: DashboardScreen, f: "animate-float" },
            { S: FindLawyerScreen, f: "animate-float-delay" },
            { S: CaseDetailsScreen, f: "animate-float" },
            { S: HearingScreen, f: "animate-float-delay" },
            { S: DocumentScreen, f: "animate-float" },
            { S: ClientDashboardScreen, f: "animate-float-delay" },
          ].map(({ S, f }, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className={f}>
                <PhoneFrame>
                  <S />
                </PhoneFrame>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: UserPlus, t: "Register", d: "Complete your profile in minutes." },
    { icon: Briefcase, t: "Create or Join Cases", d: "Manage legal records digitally." },
    { icon: BellRing, t: "Track Hearings", d: "Receive automatic reminders." },
    { icon: Handshake, t: "Collaborate", d: "Connect advocates and clients." },
  ];
  return (
    <section className="bg-surface py-16 md:py-20 border-y border-border">
      <div className="container-page">
        <SectionHeader
          center
          eyebrow="How it works"
          title="Get started in four simple steps"
        />
        <div className="relative mt-12 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                Step {i + 1}
              </div>
              <div className="mt-1 font-display text-lg font-semibold">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoFor() {
  const cards = [
    {
      icon: Gavel,
      title: "For Advocates",
      tagline: "Run your entire practice from one place.",
      points: ["Manage cases", "Generate documents", "Track hearings", "Collaborate"],
    },
    {
      icon: Users,
      title: "For Clients",
      tagline: "Stay informed on every step of your matter.",
      points: ["Track legal cases", "Receive updates", "Find advocates", "Stay informed"],
    },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <SectionHeader center eyebrow="Who is it for" title="Built for Both Sides of the Courtroom" nowrapTitle />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)] md:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/5 blur-2xl transition group-hover:bg-primary/15"
              />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.tagline}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
              >
                Request a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    { icon: Sparkles, t: "Simple Interface" },
    { icon: Building2, t: "Built for India" },
    { icon: ShieldCheck, t: "Secure Platform" },
    { icon: Zap, t: "Fast Case Management" },
    { icon: Scale, t: "Verified Advocates" },
    { icon: Handshake, t: "Professional Collaboration" },
    { icon: Bell, t: "Smart Notifications" },
    { icon: Rocket, t: "Future-ready Legal Tech" },
  ];
  return (
    <section className="bg-surface py-16 md:py-20 border-y border-border">
      <div className="container-page">
        <SectionHeader center eyebrow="Why Kanoonify" title="Why thousands will choose Kanoonify" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary-dark px-8 py-16 text-primary-foreground md:px-16"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(500px 260px at 15% 15%, rgba(255,255,255,0.45), transparent), radial-gradient(600px 320px at 85% 85%, rgba(255,255,255,0.25), transparent)",
            }}
          />
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-white/10"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Ready to Modernize Your Legal Workflow?
            </h2>
            <p className="mt-4 text-base opacity-90 md:text-lg">
              Whether you're an Advocate managing hundreds of cases or a Client tracking one important matter, Kanoonify brings everything together in one secure platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.4)]"
              >
                Request Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
