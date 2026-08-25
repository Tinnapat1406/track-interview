import Link from "next/link";

export default function Identity(){
    return(
        <div>
            <h1 className="text-3xl font-semibold text-center leading-10 tracking-tight text-black dark:text-zinc-50">
                Candidate Identity
            </h1>

            <Link href="/dashboard" className="flex items-start mt-4">
                <p className="font-semibold text-lg text-left leading-10 tracking-tight text-black dark:text-zinc-50">
                    Back to Dashboard
                </p>
            </Link>
        </div>
    )
}