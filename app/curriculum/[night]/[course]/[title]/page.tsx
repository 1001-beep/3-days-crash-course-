import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { curriculum, getNight, getCourse, getTitle } from "@/lib/curriculum";

export function generateStaticParams() {
  const params: { night: string; course: string; title: string }[] = [];
  curriculum.forEach((night) => {
    night.courses.forEach((course) => {
      course.titles.forEach((title) => {
        params.push({ night: night.slug, course: course.slug, title: title.slug });
      });
    });
  });
  return params;
}

export default function TitlePage({
  params,
}: {
  params: { night: string; course: string; title: string };
}) {
  const night = getNight(params.night);
  const course = getCourse(params.night, params.course);
  const title = getTitle(params.night, params.course, params.title);

  if (!night || !course || !title) return notFound();

  const titles = course.titles;
  const idx = titles.findIndex((t) => t.slug === title.slug);
  const prev = idx > 0 ? titles[idx - 1] : null;
  const next = idx < titles.length - 1 ? titles[idx + 1] : null;

  return (
    <main className="min-h-screen bg-paper">
      <header className="bg-navy-2 text-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo.png" alt="Dee Graphics" width={32} height={32} className="rounded" />
          </Link>
          <div className="text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Crash Course</Link>
            <span className="mx-1.5">/</span>
            <span className="text-gold">{night.label}</span>
            <span className="mx-1.5">/</span>
            <span>{course.name}</span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        <p className="text-xs font-semibold tracking-widest uppercase text-royal mb-2">
          {night.label} &middot; {night.theme}
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-2 mb-3">
          {title.name}
        </h1>
        <p className="text-slate-500 mb-10">{title.summary}</p>

        {title.content ? (
          <div className="prose-lesson">
            <ReactMarkdown>{title.content}</ReactMarkdown>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="font-display font-semibold text-navy-2 mb-1">
              This lesson is on its way.
            </p>
            <p className="text-slate-500 text-sm">
              Content for this title hasn&apos;t been added yet — check back before {night.label.toLowerCase()}.
            </p>
          </div>
        )}

        <div className="mt-14 pt-6 border-t border-slate-200 flex items-center justify-between text-sm">
          {prev ? (
            <Link
              href={`/curriculum/${night.slug}/${course.slug}/${prev.slug}`}
              className="text-royal hover:text-violet font-medium"
            >
              &larr; {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/curriculum/${night.slug}/${course.slug}/${next.slug}`}
              className="text-royal hover:text-violet font-medium"
            >
              {next.name} &rarr;
            </Link>
          ) : (
            <Link href="/" className="text-royal hover:text-violet font-medium">
              Back to overview &rarr;
            </Link>
          )}
        </div>
      </article>
    </main>
  );
                          }
