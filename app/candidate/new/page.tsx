"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createCandidate, type FormState } from "../actions";
import { STATUSES, statusLabels } from "../../../component/status";

const initialState: FormState = {};

const fieldClass =
	"w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500";

const labelClass =
	"block text-sm font-medium text-zinc-700 dark:text-zinc-300";

export default function NewCandidate() {
	const [state, formAction, pending] = useActionState(
		createCandidate,
		initialState,
	);

	return (
		<div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
			<main className="w-full max-w-xl px-6 py-12 sm:px-16">
				<div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
					<h1 className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
						Add New Profile
					</h1>
					<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
						Create a candidate profile and add it to the pipeline.
					</p>
				</div>

				<form action={formAction} className="mt-8 space-y-5">
					{state.error && (
						<p
							role="alert"
							className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20"
						>
							{state.error}
						</p>
					)}

					<div className="space-y-1.5">
						<label htmlFor="name" className={labelClass}>
							Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							required
							placeholder="Jane Doe"
							className={fieldClass}
						/>
					</div>

					<div className="space-y-1.5">
						<label htmlFor="position" className={labelClass}>
							Position
						</label>
						<input
							id="position"
							name="position"
							type="text"
							required
							placeholder="Software Engineer"
							className={fieldClass}
						/>
					</div>

					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
						<div className="space-y-1.5">
							<label htmlFor="applied" className={labelClass}>
								Applied on
							</label>
							<input
								id="applied"
								name="applied"
								type="date"
								required
								className={fieldClass}
							/>
						</div>

						<div className="space-y-1.5">
							<label htmlFor="status" className={labelClass}>
								Status
							</label>
							<select
								id="status"
								name="status"
								defaultValue="pending"
								className={fieldClass}
							>
								{STATUSES.map((status) => (
									<option key={status} value={status}>
										{statusLabels[status] ?? status}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
						<Link
							href="/candidate"
							className="rounded-lg px-4 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
						>
							Cancel
						</Link>
						<button
							type="submit"
							disabled={pending}
							className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
						>
							{pending ? "Saving…" : "Save profile"}
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}
