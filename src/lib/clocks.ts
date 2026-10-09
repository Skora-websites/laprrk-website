/* Live office clocks. Ported 1:1 from the original site's main.js:
   same timezones, same open-hours logic, same status messages (en-dash range
   converted to hyphen per DESIGN.md section 11). */

import { useEffect, useState } from "react";

const ZONES = { ist: "Asia/Kolkata", us: "America/Kentucky/Louisville" } as const;

type Parts = { time: string; hour: number; day: string };

function parts(tz: string): Parts {
  const d = new Date();
  const f = new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  });
  const p: Record<string, string> = {};
  f.formatToParts(d).forEach((x) => {
    p[x.type] = x.value;
  });
  return { time: `${p.hour}:${p.minute}`, hour: parseInt(p.hour, 10), day: p.weekday };
}

function isOpen(pt: Parts, start: number, end: number): boolean {
  const weekend = pt.day === "Sun" || pt.day === "Sat";
  return !weekend && pt.hour >= start && pt.hour < end;
}

export type ClockState = {
  ist: string;
  us: string;
  istOpen: boolean;
  usOpen: boolean;
  status: string;
};

function read(): ClockState {
  const a = parts(ZONES.ist);
  const b = parts(ZONES.us);
  const inOpen = isOpen(a, 10, 19);
  const usOpen = isOpen(b, 9, 17);
  const status =
    inOpen && usOpen
      ? "Both offices are working right now"
      : inOpen
        ? "India team is working now · USA opens at 9:00 local"
        : usOpen
          ? "USA team is working now · India team replies next morning IST"
          : "Offices closed · Leave a message, we reply within one business day";
  return { ist: a.time, us: b.time, istOpen: inOpen, usOpen, status };
}

export function useOfficeClocks(): ClockState {
  const [state, setState] = useState<ClockState>(read);
  useEffect(() => {
    const t = setInterval(() => setState(read()), 20000);
    return () => clearInterval(t);
  }, []);
  return state;
}
