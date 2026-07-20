import type { ReactNode } from "react";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[2.5rem] border border-border bg-[#111] p-2 shadow-[0_30px_80px_-30px_rgba(17,17,17,0.35)]">
        <div className="relative overflow-hidden rounded-[2rem] bg-white h-[520px] w-[260px]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="h-full w-full overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function DashboardScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white pt-8">
      <div className="px-4 pt-2">
        <div className="text-[10px] text-muted-foreground">Good morning</div>
        <div className="text-sm font-semibold">Adv. Rohan Sharma</div>
      </div>
      <div className="mx-4 mt-3 rounded-2xl bg-primary p-3 text-primary-foreground">
        <div className="text-[10px] opacity-80">Active Cases</div>
        <div className="text-2xl font-bold font-display">27</div>
        <div className="mt-1 text-[9px] opacity-80">3 hearings this week</div>
      </div>
      <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
        {[
          { l: "Hearings", v: "12" },
          { l: "Documents", v: "84" },
          { l: "Clients", v: "19" },
          { l: "Advocates", v: "6" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-surface p-2">
            <div className="text-[9px] text-muted-foreground">{s.l}</div>
            <div className="text-base font-semibold">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Upcoming
      </div>
      <div className="mx-4 mt-1 space-y-2">
        {["Sharma v. State — 14 Oct", "Verma Property — 18 Oct", "Contract Review — 22 Oct"].map(
          (t) => (
            <div key={t} className="flex items-center gap-2 rounded-lg border border-border p-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="text-[10px] font-medium">{t}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function FindLawyerScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white pt-8">
      <div className="px-4 pt-2 text-sm font-semibold">Find Lawyers</div>
      <div className="mx-4 mt-2 rounded-full border border-border px-3 py-2 text-[10px] text-muted-foreground">
        Search by city, court or expertise…
      </div>
      <div className="mx-4 mt-2 flex gap-1.5">
        {["All", "Criminal", "Civil", "Family"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-2 py-1 text-[9px] ${
              i === 0 ? "bg-primary text-primary-foreground" : "border border-border"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mx-4 mt-3 space-y-2">
        {[
          { n: "Adv. Meera Patel", c: "Mumbai · High Court", r: "4.9" },
          { n: "Adv. Kabir Singh", c: "Delhi · District", r: "4.8" },
          { n: "Adv. Riya Nair", c: "Bengaluru · Family", r: "4.9" },
        ].map((a) => (
          <div key={a.n} className="flex items-center gap-2 rounded-xl border border-border p-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-accent text-[10px] font-semibold text-primary">
              {a.n.split(" ")[1][0]}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-semibold">{a.n}</div>
              <div className="text-[9px] text-muted-foreground">{a.c}</div>
            </div>
            <div className="text-[9px] font-semibold text-primary">★ {a.r}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HearingScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white pt-8">
      <div className="px-4 pt-2 text-sm font-semibold">Hearing Timeline</div>
      <div className="mx-4 mt-3 space-y-3">
        {[
          { d: "14", m: "Oct", t: "Sharma v. State", c: "Sessions Court" },
          { d: "18", m: "Oct", t: "Verma Property", c: "Civil Court" },
          { d: "22", m: "Oct", t: "Contract Review", c: "Arbitration" },
          { d: "29", m: "Oct", t: "Bail Hearing", c: "High Court" },
        ].map((h) => (
          <div key={h.d} className="flex gap-3 rounded-xl border border-border p-2">
            <div className="grid w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <div className="text-sm font-bold leading-none">{h.d}</div>
              <div className="text-[8px] uppercase">{h.m}</div>
            </div>
            <div>
              <div className="text-[10px] font-semibold">{h.t}</div>
              <div className="text-[9px] text-muted-foreground">{h.c}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
