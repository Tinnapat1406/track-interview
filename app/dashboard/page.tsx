import Image from "next/image";
import Link from "next/link";
import Candidate from "../../component/candidate";
import candidateData from "../candidate/data.json";


export default function Home() {
  const candidates = candidateData?.candidates ?? [];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="max-w-md text-3xl font-semibold text-center leading-20">
        Interview Track
      </h1>
      <main className="text-left flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-12 px-16 bg-white dark:bg-black">
       
        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white dark:text-zinc-50 py-4">
             Overview
          </h1>

           <nav style = {{
              display: 'flex',
              gap: '24px',
              padding: '12px 32px',
              borderRadius: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
              lineHeight: '1.8'
              }}>
          <div className ="item-center justify-center"
            style ={{
              fontWeight: 'bold', 
              fontSize: '1.2rem',
              display: 'flex',
              gap: '75px',
              alignItems: 'center'
          }}>
           <p style={{ textDecoration: 'none', color: '#333' }}>Total</p>
           <p style={{ textDecoration: 'none', color: '#333' }}>Now Interview</p>
          <p style={{ textDecoration: 'none', color: '#333' }}>Completed</p>
          <p style={{ textDecoration: 'none', color: '#333' }}>Rejected</p>
          <p style={{ textDecoration: 'none', color: '#333' }}>Pending</p>

            </div>
          </nav>
        </div>

        <details open className="group w-full">
          <summary className="flex cursor-pointer list-none items-center gap-3 py-4">
            <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Upcoming Interviews
            </h2>
            <span className="rounded-full bg-black/5 px-2 py-0.5 text-sm font-medium text-black/60 dark:bg-white/10 dark:text-white/60">
              {candidates.length}
            </span>
            <svg
              className="h-5 w-5 text-black/40 transition-transform group-open:rotate-180 dark:text-white/40"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true">
              <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

        <div className="flex flex-col items-start gap-3 text-left">
           {candidates.map((candidate: any) => (
        <div className="mt-4 w-full" key={candidate.id}>
         <Candidate candidate={candidate} />
       </div>
       ))}
        </div>
    </details>


        <div className="flex flex-col items-start gap-3 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
             Statistics
          </h1>
        </div>

       
      </main>
    </div>
    
  );
}


