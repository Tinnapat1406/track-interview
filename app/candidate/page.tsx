import Link from "next/link";
import React from "react";  
import data from './data.json';


interface Candidate {
    id: number;
    name: string;
    position: string;
    applied : string;
}

const candidates: Candidate[] = data.candidates;

export default function candidate() {
    return(
        <div>
            <h1 className="text-3xl font-semibold text-center leading-10 tracking-tight text-black dark:text-zinc-50">
                Candidates
            </h1>

            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center px-5 rounded mt-4">
                <Link href="/dashboard" className="flex items-start mt-4">
                     <p className="font-semibold text-lg text-left leading-10 tracking-tight text-black dark:text-zinc-50">
                         Back to Dashboard
                     </p>
                </Link>
            </button>
            
            

            <div className = "ax-w-4xl mx-auto p-">
                <h2 className = "text-2xl font-bold text-center mb-6 text-black dark:text-zinc-50 tracking-tight">
                    list of candidates
                </h2>
                <div className = "grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul>
                    {candidates.map((candidate) => (
                        <div className ="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 mb-4">
                            <li key = {candidate.id} className = "text-lg font-semibold text-start leading-10 tracking-tight text-black dark:text-zinc-50">
                                <div>
                                    <span className = "text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                        order: {candidate.id}
                                    </span>
                                </div>

                                Candidate name: {candidate.name} <br/>
                                Position applied: {candidate.position} <br/>
                                Applied on: {candidate.applied} <br/>
                            </li>
                        </div>
                         ))}
                     </ul>
                </div>
                
            </div>
        </div>
    )
}
