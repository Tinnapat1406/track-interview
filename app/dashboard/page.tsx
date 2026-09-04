import Image from "next/image";
import Link from "next/link";
import Candidate from "../../component/candidate";
import candidateData from "../candidate/data.json";


export default function Home() {
  const candidates = candidateData?.candidates ?? [];

  const countBy = (status: string) =>
    candidates.filter((c) => c.status === status).length;

  const stats = [
    { label: "Total", value: candidates.length, accent: "text-black dark:text-zinc-50" },
    { label: "Now Interview", value: countBy("interviewing"), accent: "text-blue-600 dark:text-blue-400" },
    { label: "Completed", value: countBy("completed"), accent: "text-emerald-600 dark:text-emerald-400" },
    { label: "Rejected", value: countBy("rejected"), accent: "text-rose-600 dark:text-rose-400" },
    { label: "Pending", value: countBy("pending"), accent: "text-amber-600 dark:text-amber-400" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="max-w-md text-3xl font-semibold text-center leading-20">
        Interview Track
      </h1>
      <main className="text-left flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-12 px-16 bg-white dark:bg-black">
       
        <div className="w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 py-4">
             Overview
          </h1>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-black/5 bg-black/5 shadow-sm sm:grid-cols-3 lg:grid-cols-5 dark:border-white/10 dark:bg-white/10">
            {stats.map(({ label, value, accent }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 bg-white px-4 py-5 dark:bg-zinc-900"
              >
                <dd className={`text-3xl font-bold tabular-nums ${accent}`}>{value}</dd>
                <dt className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <details open className="group w-full">
          <summary className="flex cursor-pointer list-none items-center gap-3 py-4">
            <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Upcoming Interviews
            </h2>
            <span className="rounded-full bg-black/5 px-2 py-0.5 text-sm font-medium text-black/60 dark:bg-white/10 dark:text-white/60">
              {candidates.length}
            </span>
            <svg
              className="h-5 w-5 text-black/40 transition-transform group-open:rotate-180 dark:text-white/40"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true">
              <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

        <div className="flex flex-col items-start gap-3 text-left">
           {candidates.map((candidate: any) => (
        <div className="mt-4 w-full" key={candidate.id}>
         <Candidate candidate={candidate} />
       </div>
       ))}
        </div>
    </details>


        <div className="flex flex-col items-start gap-3 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
             Statistics
          </h1>
        </div>

       
      </main>
    </div>
    
  );
}


