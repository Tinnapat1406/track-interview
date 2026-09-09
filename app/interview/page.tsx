import Link from "next/link";
import { STATUSES, statusLabels } from "../../component/status";
import StatusSelect from "../../component/status-select";
import { getCandidates } from "../candidate/candidates";
import DeleteButton from "../../component/delete-button";


export default async function Interview() {
    const candidates = await getCandidates();

    const groups = STATUSES.map((status) => ({
        status,
        items: candidates.filter((c) => c.status === status),
    })).filter((group) => group.items.length > 0);

    return (
        <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-4xl px-6 py-12 sm:px-16">

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
                    <div>
                        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
                            Interviews
                        </h1>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {candidates.length} tracked across {groups.length} stages
                        </p>
                    </div>

                    <Link
                        href="/candidate"
                        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                        View all candidates
                    </Link>
                </div>

                {groups.length === 0 ? (
                    <p className="mt-8 rounded-xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                        No interviews tracked yet.
                    </p>
                ) : (
                    groups.map(({ status, items }) => (
                        <section key={status} className="mt-8">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
                                    {statusLabels[status] ?? status}
                                </h2>
                                <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-medium tabular-nums text-black/60 dark:bg-white/10 dark:text-white/60">
                                    {items.length}
                                </span>
                            </div>

                            <ul className="mt-3 divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
                                {items.map((candidate) => (
                                    <li
                                        key={candidate.id}
                                        className="flex items-center gap-4 px-5 py-4"
                                    >
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                                            {candidate.name.charAt(0)}
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate font-semibold tracking-tight text-black dark:text-zinc-50">
                                                {candidate.name}
                                            </p>
                                            <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                                                {candidate.position}
                                            </p>
                                        </div>

                                        <span className="hidden text-xs tabular-nums text-zinc-500 sm:block dark:text-zinc-400">
                                            Applied {candidate.applied}
                                        </span>

                                        <StatusSelect id={candidate.id} name={candidate.name} status={candidate.status} />

                                            {candidate.status === "completed" && (
                                                <DeleteButton id={candidate.id} name={candidate.name} />
                        )}

                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))
                )}
            </main>
        </div>
    );
}
