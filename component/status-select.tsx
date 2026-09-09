"use client";

import { useTransition } from "react";
import { updateCandidateStatus } from "../app/candidate/actions";
import { STATUSES, statusLabels, statusStyles } from "./status";

const fallback = "bg-zinc-100 text-zinc-600 ring-zinc-500/20 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-400/20";

export default function StatusSelect({
    id,
    status,
}: {
    id: number;
    status: string;
}) {
    const [pending, startTransition] = useTransition();

    return (
        <select
            value={status}
            disabled={pending}
            aria-label="Status"
            onChange={(e) => {
				const next = e.target.value;
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

