import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kanoonify" },
      { name: "description", content: "Request a demo, ask a question or partner with Kanoonify — India's modern legal operating system." },
      { property: "og:title", content: "Contact Kanoonify" },
      { property: "og:description", content: "Let's build the future of legal technology together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <FormSection />
      <ContactCards />
      <FAQ />
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
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(800px 350px at 50% -10%, rgba(255,107,0,0.10), transparent 60%)",
        }}
      />
      <div className="container-page py-16 md:py-20 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            Contact
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's Build the Future of Legal Technology Together
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-base text-muted-foreground md:text-lg lg:whitespace-nowrap">
            Reach out for a product demo, inquiries or partnership opportunities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FormSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    role: "Advocate",
    message: "",
  });

  const onChange = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="pb-4">
      <div className="container-page grid gap-8 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h2 className="font-display text-2xl font-bold">Request a product demonstration</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Learn how Kanunify simplifies legal case management for advocates and clients across India.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Personalised walkthrough", "Advocate & client workflows", "Security & compliance overview", "Onboarding roadmap"].map((p) => (
              <li key={p} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {p}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="md:col-span-3" delay={120}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)] md:p-8">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our team will reach out within one business day to schedule your demo.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <input required value={form.name} onChange={onChange("name")} className="input" placeholder="Your full name" />
                  </Field>
                  <Field label="Mobile Number">
                    <input required value={form.mobile} onChange={onChange("mobile")} className="input" placeholder="+91" />
                  </Field>
                </div>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={onChange("email")} className="input" placeholder="you@example.com" />
                </Field>
                <Field label="Role">
                  <select value={form.role} onChange={onChange("role")} className="input">
                    <option>Advocate</option>
                    <option>Client</option>
                    <option>Law Firm</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea value={form.message} onChange={onChange("message")} rows={4} className="input resize-none" placeholder="Tell us what you're looking for…" />
                </Field>
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_24px_50px_-16px_rgba(255,107,0,0.55)]"
                >
                  Submit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(255,107,0,0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCards() {
  const cards = [
    { icon: Phone, t: "Phone", d: "+91 90000 00000" },
    { icon: Mail, t: "Email", d: "hello@kanoonify.app" },
    { icon: Clock, t: "Business Hours", d: "Mon–Sat · 10:00 – 19:00 IST" },
  ];
  return (
    <section className="py-14">
      <div className="container-page grid gap-4 md:grid-cols-3">
        {cards.map(({ icon: Icon, t, d }, i) => (
          <Reveal key={t} delay={i * 100}>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-base font-semibold">{t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Who can use Kanoonify?", a: "Any advocate or client in India who wants to manage legal cases, hearings and collaboration in one place." },
    { q: "Is the app available for Advocates and Clients?", a: "Yes — Kanoonify provides tailored experiences for both advocates and clients on the same secure platform." },
    { q: "Will Android and iOS both be supported?", a: "Yes. Kanoonify is being built for both Android and iOS, alongside a web dashboard." },
    { q: "Can multiple advocates collaborate?", a: "Absolutely. Cases can have multiple advocates with clear roles, permissions and shared workspaces." },
    { q: "Is legal data secure?", a: "Yes. We use OTP-based login, encrypted data storage and secure cloud infrastructure with regular audits." },
  ];
  return (
    <section className="bg-surface py-16 md:py-20 border-y border-border">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">FAQ</div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Questions, answered
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-background shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="group px-6 py-5 open:bg-surface/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold">
                  {f.q}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
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
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-primary-dark p-10 text-center text-primary-foreground md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(500px 260px at 15% 15%, rgba(255,255,255,0.45), transparent), radial-gradient(600px 320px at 85% 85%, rgba(255,255,255,0.25), transparent)",
              }}
            />
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div aria-hidden className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full border border-white/10" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to see Kanunify?</h2>
              <p className="mx-auto mt-3 max-w-xl opacity-90">
                Book a personalised walkthrough tailored to your practice.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(0,0,0,0.4)]"
              >
                Request Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
