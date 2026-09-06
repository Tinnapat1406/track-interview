"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { STATUSES } from "../../component/status";
import { addCandidate } from "./candidates";

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
