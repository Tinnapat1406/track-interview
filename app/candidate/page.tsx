import Link from "next/link";
import data from './data.json';


interface Candidate {
    id: number;
    name: string;
    position: string;
    applied : string;
    status: string;
}

const candidates: Candidate[] = data.candidates;

const statusStyles: Record<string, string> = {
    interviewing: "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20",
    completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20",
    rejected: "bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20",
    pending: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20",
};

const statusLabels: Record<string, string> = {
    interviewing: "Interviewing",
    completed: "Completed",
    rejected: "Rejected",
    pending: "Pending",
};

export default function Candidates() {
    return (
        <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-4xl px-6 py-12 sm:px-16">

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
                    <div>
                        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
                            Candidates
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {candidates.length} {candidates.length === 1 ? "candidate" : "candidates"} in the pipeline
                        </p>
                    </div>

                    <Link
                        href="/dashboard"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        <svg
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M12 5 7 10l5 5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Dashboard
                    </Link>
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {candidates.map((candidate) => (
                        <li
                            key={candidate.id}
                            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <div className="flex items-start gap-4">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                    {candidate.name.charAt(0)}
                                </span>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                        <h2 className="truncate text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
                                            {candidate.name}
                                        </h2>
                                        <span
                                            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                                                statusStyles[candidate.status] ??
                                                "bg-zinc-100 text-zinc-600 ring-zinc-500/20 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-400/20"
                                            }`}
                                        >
                                            {statusLabels[candidate.status] ?? candidate.status}
                                        </span>
                                    </div>

                                    <p className="mt-0.5 truncate text-sm text-zinc-700 dark:text-zinc-300">
                                        {candidate.position}
                                    </p>

                                    <dl className="mt-3 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                                        <div className="flex gap-1">
                                            <dt>Applied</dt>
                                            <dd className="font-medium text-zinc-700 tabular-nums dark:text-zinc-300">
                                                {candidate.applied}
                                            </dd>
                                        </div>
                                        <div className="flex gap-1">
                                            <dt>Order</dt>
                                            <dd className="font-medium text-zinc-700 tabular-nums dark:text-zinc-300">
                                                {candidate.id}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
