"use client";

import { useTransition } from "react";
import { updateCandidateStatus } from "../app/candidate/actions";
import StatusBadge, { STATUSES, statusLabels, statusStyles } from "./status";

const fallback = "bg-zinc-100 text-zinc-600 ring-zinc-500/20 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-400/20";

export default function StatusSelect({
    id,
    name,
    status,
}: {
    id: number;
    name: string;
    status: string;
}) {
    const [pending, startTransition] = useTransition();

    if (status === "completed") {
        return (
            <span
                className="inline-flex items-center gap-1"
                title="Completed is final — this status can no longer be changed."
            >
                <svg
                    className="h-3 w-3 text-zinc-400 dark:text-zinc-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <rect x="5" y="9" width="10" height="7" rx="1.5" />
                    <path d="M7.5 9V6.5a2.5 2.5 0 0 1 5 0V9" strokeLinecap="round" />
                </svg>
                <StatusBadge status={status} />
            </span>
        );
    }

    return (
        <select
            value={status}
            disabled={pending}
            aria-label="Status"
            onChange={(e) => {
                const next = e.target.value;

                if (next === "completed") {
                    const ok = window.confirm(
                        `Mark ${name} as Completed?\n\nThis is permanent. Once completed, the status can no longer be changed — the profile can only be deleted.`,
                    );
                    if (!ok) {
                        e.target.value = status;
                        return;
                    }
                }

                startTransition(() => {
                    updateCandidateStatus(id, next);
                });
            }}
            className={`shrink-0 cursor-pointer appearance-none rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 ${statusStyles[status] ?? fallback}`}
        >
            {STATUSES.map((s) => (
                <option key={s} value={s}>
                    {statusLabels[s]}
                </option>
            ))}
        </select>
    )
}
