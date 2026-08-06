import Image from "next/image";
import Link from "next/link";
import { curriculum } from "@/lib/curriculum";
import NightCard from "@/components/NightCard";

const WHATSAPP_NUMBER = "2348133419987";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to register for the free 3-day Graphic Design Crash Course."
)}`;

const STEPS = [
  {
    n: "01",
    title: "Message us on WhatsApp",
    body: "Send a message to +234 813 341 9987 to reserve your seat.",
  },
  {
    n: "02",
    title: "Get added to the group",
    body: "You'll receive the WhatsApp group link before August 7th.",
  },
  {
    n: "03",
    title: "Install Pixel Lab",
    body: "Download the free app so you're ready to design from night one.",
  },
  {
    n: "04",
    title: "Show up at 8:00 PM",
    body: "Three nights, live in the group — August 7th, 8th & 9th.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Header */}
      <header className="bg-navy-2 text-white sticky top-0 z-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Dee Graphics" width={34} height={34} className="rounded" />
            <span className="font-display font-bold text-sm tracking-wide">
              DEE GRAPHICS <span className="text-slate-400 font-normal">ACADEMY</span>
            </span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-xs font-semibold bg-royal hover:bg-violet transition-colors px-4 py-2 rounded-full"
          >
            Register Free
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-gradient text-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
              Free &middot; 3 Nights &middot; Aug 7–9, 2026
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Design skills, taught the way beginners actually learn.
            </h1>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-md">
              Most design courses assume you already own a laptop, a subscription, and
              hours of free time. This one doesn&apos;t. Everything happens live in a
              WhatsApp group, every night for three nights, in Pixel Lab — a free app
              you already have room for on your phone.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
              By the end of night three, you&apos;ll have made real flyers, understood
              the language designers use with clients, and know exactly what to learn
              next if you want to take it further.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navy-2 font-semibold text-sm px-6 py-3 rounded-full hover:bg-gold transition-colors"
              >
                Message +234 813 341 9987
              </a>
              <a
                href="#curriculum"
                className="border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                See the 3-day plan
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <Image
              src="/flyer.png"
              alt="Free 3 Day Graphic Design Crash Course flyer — August 7-9 2026"
              width={720}
              height={1080}
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-display font-semibold text-navy-2">No experience needed</p>
            <p className="text-slate-500">We start from what a font is.</p>
          </div>
          <div>
            <p className="font-display font-semibold text-navy-2">Small, live group</p>
            <p className="text-slate-500">Ask questions as you go.</p>
          </div>
          <div>
            <p className="font-display font-semibold text-navy-2">Real output</p>
            <p className="text-slate-500">You leave with finished flyer designs.</p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-2">
          The 3-Day Plan
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-2 mb-2">
          What you&apos;ll cover, night by night
        </h2>
        <p className="text-slate-500 mb-10 max-w-2xl">
          Each session runs live at 8:00 PM in the WhatsApp group and builds directly
          on the last. Tap a course to see its titles — tap a title to read the lesson.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {curriculum.map((night) => (
            <NightCard key={night.slug} night={night} />
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-4">
            Project Reference
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-video max-w-3xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/i6Ycm5TDnzU"
              title="Crash Course Project Reference"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-2 mb-10">
            How to join
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.n}>
                <p className="font-display text-royal font-bold text-lg mb-2">{step.n}</p>
                <p className="font-display font-semibold text-navy-2 mb-1">{step.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-brand-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Seats are free and limited to the group size.
          </h2>
          <p className="text-slate-200 mb-8">
            Message us on WhatsApp to lock in your spot for the Aug 7–9 crash course.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy-2 font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-gold transition-colors"
          >
            Message +234 813 341 9987
          </a>
        </div>
      </section>

      <footer className="bg-navy text-slate-400 text-xs text-center py-6 px-6">
        Dee Graphics Academy &middot; Graphic Design Crash Course &middot; Aug 7–9, 2026
      </footer>
    </main>
  );
      }
