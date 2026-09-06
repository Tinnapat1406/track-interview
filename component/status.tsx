export const STATUSES = ["interviewing", "pending", "completed", "rejected"] as const;

export const statusStyles: Record<string, string> = {
	interviewing: "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20",
	completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20",
	rejected: "bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20",
	pending: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20",
};

export const statusLabels: Record<string, string> = {
	interviewing: "Interviewing",
	completed: "Completed",
	rejected: "Rejected",
	pending: "Pending",
};

const fallback =
	"bg-zinc-100 text-zinc-600 ring-zinc-500/20 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-400/20";

export default function StatusBadge({ status }: { status: string }) {
	return (
		<span
			className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
				statusStyles[status] ?? fallback
			}`}
		>
			{statusLabels[status] ?? status}
		</span>
	);
}
