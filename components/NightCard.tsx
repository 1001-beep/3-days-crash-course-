"use client";

import { useState } from "react";
import Link from "next/link";
import type { Night } from "@/lib/curriculum";

const ACCENTS: Record<string, string> = {
  "night-1": "border-royal text-royal",
  "night-2": "border-teal-500 text-teal-600",
  "night-3": "border-gold text-amber-600",
};

export default function NightCard({ night }: { night: Night }) {
  const [openCourse, setOpenCourse] = useState<string | null>(
    night.courses[0]?.slug ?? null
  );
  const accent = ACCENTS[night.slug] ?? "border-royal text-royal";

  return (
    <div className="bg-navy-2 rounded-2xl p-6 md:p-7 flex flex-col h-full border border-white/5">
      <p className={`text-xs font-semibold tracking-widest uppercase mb-1 ${accent.split(" ")[1]}`}>
        {night.label} &middot; {night.dateLabel}
      </p>
      <h3 className="font-display text-xl font-bold text-white mb-5">
        {night.theme}
      </h3>

      <div className="space-y-3 flex-1">
        {night.courses.map((course) => {
          const isOpen = openCourse === course.slug;
          return (
            <div key={course.slug} className={`rounded-lg border-l-2 pl-4 ${accent.split(" ")[0]}`}>
              <button
                type="button"
                onClick={() => setOpenCourse(isOpen ? null : course.slug)}
                className="w-full flex items-center justify-between text-left py-1.5 group"
                aria-expanded={isOpen}
              >
                <span className="text-white font-medium text-sm">{course.name}</span>
                <span
                  className={`text-slate-400 text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▾
                </span>
              </button>

              {isOpen && (
                <ul className="pb-2 space-y-1">
                  {course.titles.map((title) => (
                    <li key={title.slug}>
                      <Link
                        href={`/curriculum/${night.slug}/${course.slug}/${title.slug}`}
                        className="flex items-center justify-between text-sm text-slate-300 hover:text-white py-1.5 transition-colors"
                      >
                        <span>{title.name}</span>
                        {!title.content && (
                          <span className="text-[10px] uppercase tracking-wide text-slate-500 ml-2 shrink-0">
                            soon
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
    }
