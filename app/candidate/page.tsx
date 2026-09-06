import Link from "next/link";
import StatusBadge from "../../component/status";
import { getCandidates } from "./candidates";

export default async function Candidates() {
    const candidates = await getCandidates();

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
                                        <StatusBadge status={candidate.status} />
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
