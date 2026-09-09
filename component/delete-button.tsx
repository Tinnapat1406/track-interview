"use client";

import { useTransition } from "react";
import { deleteCandidateProfile } from "../app/candidate/actions";

export default function DeleteButton({
	id,
	name,
}: {
	id: number;
	name: string;
}) {
	const [pending, startTransition] = useTransition();

	return (
		<button
			type="button"
			disabled={pending}
			aria-label={`Delete ${name}`}
			title={`Delete ${name}`}
			onClick={() => {
				const ok = window.confirm(
					`Delete ${name}?\n\nThis permanently removes the profile and cannot be undone.`,
				);
				if (!ok) return;

				startTransition(() => {
					deleteCandidateProfile(id);
				});
			}}
			className="shrink-0 rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-rose-50 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
		>
			<svg
				className="h-4 w-4"
				viewBox="0 0 20 20"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.75"
				aria-hidden="true"
			>
				<path d="M4 6h12M8 6V4.5A.5.5 0 0 1 8.5 4h3a.5.5 0 0 1 .5.5V6m1.5 0-.6 9a1 1 0 0 1-1 .95H6.6a1 1 0 0 1-1-.95L5 6" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	);
}
