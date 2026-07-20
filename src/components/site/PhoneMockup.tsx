import type { ReactNode } from "react";
import iconAsset from "@/assets/kanoonify-icon.png.asset.json";
import {
  Bell,
  Search,
  Home,
  Calendar,
  FileText,
  User,
  Scale,
  ChevronRight,
  MapPin,
  Star,
  Clock,
  Gavel,
  Download,
  CheckCircle2,
  Users,
} from "lucide-react";

/* ---------- Frame ---------- */

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* soft ground shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 h-8 w-56 -translate-x-1/2 rounded-full bg-black/25 blur-2xl"
      />
      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-[#1c1c1e] to-[#0b0b0c] p-[3px] shadow-[0_30px_80px_-30px_rgba(17,17,17,0.55)]">
        <div className="rounded-[2.5rem] border border-white/10 bg-[#111] p-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-white h-[540px] w-[270px]">
            {/* status bar */}
            <div className="absolute inset-x-0 top-0 z-20 flex h-8 items-center justify-between px-5 pt-1.5 text-[10px] font-semibold text-foreground">
              <span>9:41</span>
              <span className="tracking-tight">Kanoonify</span>
              <span>100%</span>
            </div>
            {/* notch */}
            <div className="absolute left-1/2 top-1.5 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
            {/* subtle screen reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-40 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.06) 100%)",
              }}
            />
            <div className="h-full w-full overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Shared bits ---------- */

function BrandBadge({ size = 22 }: { size?: number }) {
  return (
    <img
      src={iconAsset.url}
      alt="Kanoonify"
      className="rounded-[6px] object-cover"
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}

function AppHeader({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between px-4 pt-9">
      <div className="flex items-center gap-2">
        <BrandBadge size={22} />
        <span className="text-[11px] font-semibold tracking-tight text-foreground">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-muted-foreground">
        {right ?? <Bell className="h-3.5 w-3.5" />}
      </div>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "cases" | "calendar" | "docs" | "me" }) {
  const items = [
    { k: "home", Icon: Home, l: "Home" },
    { k: "cases", Icon: Scale, l: "Cases" },
    { k: "calendar", Icon: Calendar, l: "Hearings" },
    { k: "docs", Icon: FileText, l: "Docs" },
    { k: "me", Icon: User, l: "Me" },
  ] as const;
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 border-t border-border bg-white/95 backdrop-blur">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map(({ k, Icon, l }) => {
          const on = k === active;
          return (
            <div key={k} className="flex flex-col items-center gap-0.5">
              <Icon
                className={`h-4 w-4 ${on ? "text-primary" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[8px] font-medium ${
                  on ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScreenShell({
  children,
  active,
}: {
  children: ReactNode;
  active: "home" | "cases" | "calendar" | "docs" | "me";
}) {
  return (
    <div className="relative flex h-full w-full flex-col bg-white">
      <div className="flex-1 overflow-hidden pb-14">{children}</div>
      <BottomNav active={active} />
    </div>
  );
}

/* ---------- Screen 1 · Advocate Dashboard ---------- */

export function DashboardScreen() {
  return (
    <ScreenShell active="home">
      <AppHeader title="Dashboard" />
      <div className="px-4 pt-2">
        <div className="text-[9px] text-muted-foreground">Good morning,</div>
        <div className="text-[13px] font-semibold text-foreground">Adv. Rohan Sharma</div>
      </div>
      <div className="mx-4 mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-3 text-primary-foreground">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] opacity-80">Active Cases</div>
            <div className="mt-0.5 font-display text-2xl font-bold leading-none">27</div>
            <div className="mt-1.5 text-[8.5px] opacity-90">3 hearings this week</div>
          </div>
          <BrandBadge size={28} />
        </div>
      </div>
      <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
        {[
          { l: "Hearings", v: "12", Icon: Calendar },
          { l: "Documents", v: "84", Icon: FileText },
          { l: "Clients", v: "19", Icon: Users },
          { l: "Advocates", v: "6", Icon: Gavel },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-surface p-2">
            <div className="flex items-center justify-between">
              <div className="text-[9px] text-muted-foreground">{s.l}</div>
              <s.Icon className="h-3 w-3 text-primary" />
            </div>
            <div className="mt-0.5 text-[15px] font-semibold">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-3 flex items-center justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Upcoming
        </div>
        <div className="text-[9px] font-medium text-primary">View all</div>
      </div>
      <div className="mx-4 mt-1.5 space-y-1.5">
        {[
          { t: "Sharma v. State of MH", c: "CRL/2451/2026 · 14 Oct" },
          { t: "Verma Property Dispute", c: "CIV/1183/2026 · 18 Oct" },
          { t: "Kapoor Contract Review", c: "ARB/0442/2026 · 22 Oct" },
        ].map((h) => (
          <div
            key={h.t}
            className="flex items-center gap-2 rounded-lg border border-border p-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="flex-1">
              <div className="text-[10px] font-semibold leading-tight">{h.t}</div>
              <div className="text-[8.5px] text-muted-foreground">{h.c}</div>
            </div>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

/* ---------- Screen 2 · Find Lawyer ---------- */

export function FindLawyerScreen() {
  return (
    <ScreenShell active="cases">
      <AppHeader title="Find Lawyers" right={<Search className="h-3.5 w-3.5" />} />
      <div className="mx-4 mt-3 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-[10px] text-muted-foreground">
        <Search className="h-3 w-3" />
        Search by city, court or expertise…
      </div>
      <div className="mx-4 mt-2 flex gap-1.5 overflow-hidden">
        {["All", "Criminal", "Civil", "Family", "Corporate"].map((t, i) => (
          <span
            key={t}
            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-medium ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mx-4 mt-3 space-y-2">
        {[
          { n: "Adv. Meera Patel", c: "Mumbai · Bombay HC", r: "4.9", y: "12 yrs" },
          { n: "Adv. Kabir Singh", c: "Delhi · Tis Hazari", r: "4.8", y: "9 yrs" },
          { n: "Adv. Riya Nair", c: "Bengaluru · Family Ct.", r: "4.9", y: "7 yrs" },
          { n: "Adv. Arjun Menon", c: "Kochi · Kerala HC", r: "4.7", y: "15 yrs" },
        ].map((a) => (
          <div
            key={a.n}
            className="flex items-center gap-2 rounded-xl border border-border p-2"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
              {a.n.split(" ")[1][0]}
              {a.n.split(" ")[2]?.[0] ?? ""}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold leading-tight">{a.n}</div>
              <div className="flex items-center gap-1 text-[8.5px] text-muted-foreground">
                <MapPin className="h-2.5 w-2.5" /> {a.c}
              </div>
              <div className="mt-0.5 text-[8px] text-muted-foreground">{a.y} · Verified</div>
            </div>
            <div className="flex items-center gap-0.5 text-[9px] font-semibold text-primary">
              <Star className="h-2.5 w-2.5 fill-primary" /> {a.r}
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

/* ---------- Screen 3 · Hearing Timeline ---------- */

export function HearingScreen() {
  return (
    <ScreenShell active="calendar">
      <AppHeader title="Hearing Timeline" />
      <div className="mx-4 mt-3 flex items-center justify-between">
        <div>
          <div className="text-[9px] text-muted-foreground">October 2026</div>
          <div className="text-[12px] font-semibold">4 hearings scheduled</div>
        </div>
        <div className="rounded-full bg-primary/10 px-2 py-1 text-[9px] font-semibold text-primary">
          This month
        </div>
      </div>
      <div className="mx-4 mt-3 space-y-2">
        {[
          { d: "14", m: "Oct", t: "Sharma v. State of MH", c: "Sessions Court, Mumbai", n: "CRL/2451/2026", tm: "11:00 AM" },
          { d: "18", m: "Oct", t: "Verma Property Dispute", c: "Civil Court, Pune", n: "CIV/1183/2026", tm: "10:30 AM" },
          { d: "22", m: "Oct", t: "Kapoor Contract Review", c: "Arbitration, ICADR", n: "ARB/0442/2026", tm: "02:00 PM" },
          { d: "29", m: "Oct", t: "Nair Bail Hearing", c: "Bombay High Court", n: "BAIL/0987/2026", tm: "09:45 AM" },
        ].map((h) => (
          <div key={h.n} className="flex gap-2 rounded-xl border border-border p-2">
            <div className="grid w-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <div className="text-[13px] font-bold leading-none">{h.d}</div>
              <div className="mt-0.5 text-[8px] font-semibold uppercase">{h.m}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold leading-tight">{h.t}</div>
              <div className="text-[8.5px] text-muted-foreground">{h.c}</div>
              <div className="mt-0.5 flex items-center gap-2 text-[8px] text-muted-foreground">
                <span className="rounded bg-surface px-1 py-0.5 font-medium">{h.n}</span>
                <span className="flex items-center gap-0.5">
                  <Clock className="h-2.5 w-2.5" /> {h.tm}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

/* ---------- Screen 4 · Case Details ---------- */

export function CaseDetailsScreen() {
  return (
    <ScreenShell active="cases">
      <AppHeader title="Case Details" />
      <div className="mx-4 mt-3 rounded-2xl border border-border p-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[8.5px] font-medium text-primary">CRL/2451/2026</div>
            <div className="mt-0.5 text-[12px] font-semibold leading-tight">
              Sharma v. State of Maharashtra
            </div>
            <div className="mt-0.5 text-[9px] text-muted-foreground">
              Sessions Court, Greater Bombay
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[8.5px] font-semibold text-primary">
            Active
          </span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-2">
          <div>
            <div className="text-[8px] uppercase text-muted-foreground">Client</div>
            <div className="text-[9.5px] font-semibold">A. Sharma</div>
          </div>
          <div>
            <div className="text-[8px] uppercase text-muted-foreground">Stage</div>
            <div className="text-[9.5px] font-semibold">Trial</div>
          </div>
          <div>
            <div className="text-[8px] uppercase text-muted-foreground">Next</div>
            <div className="text-[9.5px] font-semibold">14 Oct</div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Case Progress
      </div>
      <div className="mx-4 mt-1.5 space-y-1.5">
        {[
          { t: "FIR Registered", d: "12 Mar 2026", done: true },
          { t: "Chargesheet Filed", d: "04 Jun 2026", done: true },
          { t: "Framing of Charges", d: "22 Aug 2026", done: true },
          { t: "Prosecution Evidence", d: "14 Oct 2026", done: false },
          { t: "Defence Arguments", d: "Pending", done: false },
        ].map((s) => (
          <div key={s.t} className="flex items-center gap-2 rounded-lg border border-border p-1.5">
            <CheckCircle2
              className={`h-3.5 w-3.5 ${s.done ? "text-primary" : "text-muted-foreground/40"}`}
            />
            <div className="flex-1">
              <div className="text-[9.5px] font-semibold leading-tight">{s.t}</div>
              <div className="text-[8px] text-muted-foreground">{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

/* ---------- Screen 5 · Document Generation ---------- */

export function DocumentScreen() {
  return (
    <ScreenShell active="docs">
      <AppHeader title="Document Generator" />
      <div className="mx-4 mt-3 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-3 text-primary-foreground">
        <div className="flex items-center gap-2">
          <BrandBadge size={24} />
          <div>
            <div className="text-[9px] opacity-80">Generate in seconds</div>
            <div className="text-[11px] font-semibold">Smart Legal Drafts</div>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Templates
      </div>
      <div className="mx-4 mt-1.5 grid gap-2">
        {[
          "Gate Pass",
          "Summoning",
          "Exemption",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2 rounded-xl border border-border p-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
              <FileText className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-[10.5px] font-semibold leading-tight">{t}</div>
              <div className="mt-0.5 text-[8px] text-muted-foreground">PDF · DOCX</div>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        ))}
      </div>
      <div className="mx-4 mt-3 flex items-center justify-between rounded-xl border border-border bg-surface p-2">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
            <Download className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="text-[9.5px] font-semibold leading-tight">
              Bail_Application_Sharma.pdf
            </div>
            <div className="text-[8px] text-muted-foreground">Just generated · 84 KB</div>
          </div>
        </div>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
    </ScreenShell>
  );
}

/* ---------- Screen 6 · Client Dashboard ---------- */

export function ClientDashboardScreen() {
  return (
    <ScreenShell active="home">
      <AppHeader title="My Cases" />
      <div className="px-4 pt-2">
        <div className="text-[9px] text-muted-foreground">Welcome back,</div>
        <div className="text-[13px] font-semibold">Ananya Sharma</div>
      </div>
      <div className="mx-4 mt-3 rounded-2xl border border-border p-3">
        <div className="flex items-center gap-2">
          <BrandBadge size={22} />
          <div className="flex-1">
            <div className="text-[8.5px] font-medium text-primary">CRL/2451/2026</div>
            <div className="text-[10.5px] font-semibold leading-tight">
              Sharma v. State of MH
            </div>
          </div>
          <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[8px] font-semibold text-primary">
            On Track
          </span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface">
          <div className="h-full w-3/5 rounded-full bg-primary" />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-muted-foreground">
          <span>Stage: Prosecution Evidence</span>
          <span>60%</span>
        </div>
      </div>
      <div className="mx-4 mt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Recent Updates
      </div>
      <div className="mx-4 mt-1.5 space-y-1.5">
        {[
          { t: "New hearing scheduled", d: "14 Oct · Sessions Court", i: Calendar },
          { t: "Document uploaded by advocate", d: "Charge Memo · 2 hrs ago", i: FileText },
          { t: "Message from Adv. Sharma", d: "Kindly review the affidavit…", i: Bell },
        ].map((u) => (
          <div key={u.t} className="flex items-start gap-2 rounded-lg border border-border p-2">
            <div className="grid h-6 w-6 place-items-center rounded-lg bg-primary/10 text-primary">
              <u.i className="h-3 w-3" />
            </div>
            <div className="flex-1">
              <div className="text-[9.5px] font-semibold leading-tight">{u.t}</div>
              <div className="text-[8px] text-muted-foreground">{u.d}</div>
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}
