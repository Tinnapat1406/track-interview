import Link from "next/link";
import React from "react";  
import data from './data.json';


interface Candidate {
    id: number;
    name: string;
}

const candidates: Candidate[] = data.candidates;

export default function candidate() {
    return(
        <div>
            <h1 className="text-3xl font-semibold text-center leading-10 tracking-tight text-black dark:text-zinc-50">
                Candidates
            </h1>

            <Link href="/dashboard" className="flex items-start mt-4">
                <p className="font-semibold text-lg text-left leading-10 tracking-tight text-black dark:text-zinc-50">
                    Back to Dashboard
                </p>
            </Link>

            <div className = "text-lg font-semibold text-center leading-10 tracking-tight text-black dark:text-zinc-50">
                list of candidates 
                <ul>
                    {candidates.map((candidate) => (
                        <li key = {candidate.id} className = "text-lg font-semibold text-start leading-10 tracking-tight text-black dark:text-zinc-50">
                            {candidate.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
