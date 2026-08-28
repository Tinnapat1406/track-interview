
import React from "react";

type CandidateType = {
	id: number;
	name: string;
	position: string;
	applied: string;
};

export default function Candidate({
	candidate,
}: {
	candidate: CandidateType;
}) {
	return (
		<div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 mb-4">
			<div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
				order: {candidate.id}
			</div>
			<div className="text-lg font-semibold text-start text-black dark:text-zinc-50">
				{candidate.name}
			</div>
			<div className="text-sm text-zinc-700 dark:text-zinc-300">Position: {candidate.position}</div>
			<div className="text-sm text-zinc-700 dark:text-zinc-300">Applied on: {candidate.applied}</div>
		</div>
	);
}
