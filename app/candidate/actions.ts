"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { STATUSES } from "../../component/status";
import {
	addCandidate,
	deleteCandidate,
	getCandidates,
	updateCandidateStatus as writeCandidateStatus,
} from "./candidates";



export type FormState = { error?: string };

export async function createCandidate(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	const name = String(formData.get("name") ?? "").trim();
	const position = String(formData.get("position") ?? "").trim();
	const applied = String(formData.get("applied") ?? "").trim();
	const status = String(formData.get("status") ?? "").trim();

	if (!name) return { error: "Name is required." };
	if (!position) return { error: "Position is required." };
	if (!applied) return { error: "Applied date is required." };
	if (!(STATUSES as readonly string[]).includes(status)) {
		return { error: "Pick a valid status." };
	}

	await addCandidate({ name, position, applied, status });

	revalidatePath("/dashboard");
	revalidatePath("/candidate");
	revalidatePath("/interview");

	redirect("/candidate");
}

export async function updateCandidateStatus(
	id: number,
	status: string,
){
	if(!(STATUSES as readonly string[]).includes(status)){
		throw new Error(`Invalid status: ${status}`);
	}
	await writeCandidateStatus(id,status);
	revalidatePath("/dashboard");
	revalidatePath("/candidate");
	revalidatePath("/interview");

	const candidates = await getCandidates();
	const current = candidates.find((c) => c.id === id);
	if (!current) throw new Error(`Candidate not found: ${id}`);
	if (current.status === "completed") {
		throw new Error(`Completed candidates cannot be updated: ${id}`);
	}
}

export async function deleteCandidate(id: number) {
	const removed = await deleteCandidate(id);
	if (!removed) throw new Error(`Candidate not found: ${id}`);

	revalidatePath("/dashboard");
	revalidatePath("/candidate");
	revalidatePath("/interview");
}

