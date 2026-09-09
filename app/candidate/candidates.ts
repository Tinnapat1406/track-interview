import { promises as fs } from "fs";
import path from "path";

export interface Candidate {
	id: number;
	name: string;
	position: string;
	applied: string;
	status: string;
}

const dataFile = path.join(process.cwd(), "app", "candidate", "data.json");

export async function getCandidates(): Promise<Candidate[]> {
	const raw = await fs.readFile(dataFile, "utf-8");
	const parsed = JSON.parse(raw) as { candidates?: Candidate[] };
	return parsed.candidates ?? [];
}

export async function addCandidate(
	candidate: Omit<Candidate, "id">,
): Promise<Candidate> {
	const candidates = await getCandidates();
	const nextId = candidates.reduce((max, c) => Math.max(max, c.id), 0) + 1;
	const created: Candidate = { id: nextId, ...candidate };

	await fs.writeFile(
		dataFile,
		JSON.stringify({ candidates: [...candidates, created] }, null, 2) + "\n",
		"utf-8",
	);

	return created;
}
export async function updateCandidateStatus(
	id : number,
	status : string,
): Promise<Candidate | null>{
	const candidates = await getCandidates();
	const target = candidates.find((c) => c.id === id);
	if(!target) return null;

	const updated = candidates.map((c)=> 
		c.id === id ? {...c,status} : c,
);
	await fs.writeFile(
		dataFile,
		JSON.stringify({ candidates: updated }, null, 2) + "\n",
		"utf-8"
	);

	return updated.find((c) => c.id === id) || null;
}
