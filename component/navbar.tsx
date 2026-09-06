"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/candidate", label: "Candidate" },
    { href: "/interview", label: "Interview" },
];

export default function Navbar(){
    const pathname = usePathname();
    const [open,setOpen] = useState(false);

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700">
         <nav className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">

            {/*Brand*/}
            <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white tracking-tight">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-xs font-bold text-background">
                    TI
                </span>
            </Link>

            {/*Desktop*/}
            <ul className="ml-2 hidden items-center gap-1 md:flex">
                {links.map(({href,label}) => (
                    <li key={href}>
                        <Link href={href}
                        aria-current={isActive(href)? "page" : undefined}
                        className={`rounded-md px-3 py-2 text-sm transition-colors ${
                            isActive(href)
                            ? "bg-black/5 font-medium text-foreground dark:bg-white/10"
                            : "text-foreground/60 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
                         }`}>
                            {label}
                         </Link>
                    </li>
                ))}
            </ul>

            {/*Right Side*/}
            <div className="ml-auto flex items-center gap-2">
                <Link href="/candidate/new" className="hidden rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-block">
                    Add New Profile
                </Link>

            {/* Mobile toggle */}
            <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
            className="rounded-md p-2 hover:bg-black/5 md:hidden dark:hover:bg-white/10">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="mt-1 block h-0.5 w-5 bg-current" />
                <span className="mt-1 block h-0.5 w-5 bg-current" />
             </button>
            </div>
        </nav>

        {/* Mobile menu */}
        {open && (
            <ul
            id="mobile-nav"
            className="border-t border-black/10 px-4 py-2 md:hidden dark:border-white/10">
                {links.map(({ href, label }) => (
                <li key={href}>
                <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-sm ${
                    isActive(href)
                        ? "bg-black/5 font-medium dark:bg-white/10"
                        : "text-foreground/70"
                    }`}>
                    {label}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </header>
    );
}
