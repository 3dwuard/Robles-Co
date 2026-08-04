import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const practiceArea = practiceAreas.find((area) => area.slug === params.slug);

  if (!practiceArea) {
    notFound();
  }

  const { title, icon: Icon, summary, whatWeHandle } = practiceArea;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-5">
          <Link href="/" className="font-serif text-xl tracking-wide text-gray-900">
            Robles &amp; Co
          </Link>
        </div>
      </div>

      <section className="w-full px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            ← Back to home
          </Link>

          <div className="mt-10 flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ad8a4e]/40 bg-[#ad8a4e]/[0.06]">
              <Icon className="h-8 w-8 text-[#ad8a4e]" />
            </div>

            <h1 className="mt-6 font-serif text-3xl text-gray-900 sm:text-4xl">{title}</h1>

            <p className="mt-5 text-base text-gray-600 sm:text-lg">{summary}</p>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
              What we handle
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {whatWeHandle.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ad8a4e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
