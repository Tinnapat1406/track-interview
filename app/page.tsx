import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="max-w-md text-3xl font-semibold text-center leading-20">
        Interview Track
      </h1>
      <main className="text-left flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-white dark:bg-black">
       
      <nav style = {{
        display : 'flex',
        gap : '30px',
        justifyContent : 'center',
        alignItems : 'center',
        padding : '1rem 2rem',
        backgroundColor : '#f5f5f5',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style ={{
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


  
        <div className="flex flex-col items-start gap-3 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
             Upcoming Interviews
          </h1>
        </div>

       
      </main>
    </div>
    
  );
}


