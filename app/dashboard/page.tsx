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
      <main className="text-left flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-white dark:bg-black">
       
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
          gap: '20px',
          alignItems: 'center'
        }}>
           <Link href="/candidate" style={{ textDecoration: 'none', color: '#333' }}>Candidate</Link>
           <Link href="/candidate/id" style={{ textDecoration: 'none', color: '#333' }}>Identity</Link>

        </div>
      </nav>

        <div>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white dark:text-zinc-50">
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

        <div className="flex flex-col items-start gap-3 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
             Upcoming Interviews
          </h1>
          {candidates.map((candidate: any) => (
            <div className="mt-4 w-full" key={candidate.id}>
              <Candidate candidate={candidate} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
             Statistics
          </h1>
        </div>

       
      </main>
    </div>
    
  );
}


