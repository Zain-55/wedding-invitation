import Link from "next/link";
export default function NotFound() {
  return <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
    <p className="font-script text-6xl gold-text">Z &amp; A</p>
    <h1 className="mt-6 text-3xl">This page could not be found</h1>
    <p className="mt-2 text-ink/70">The link may be incorrect. The invitation is waiting on the home page.</p>
    <Link href="/" className="mt-8 border border-gold px-8 py-3 tracking-widest text-gold hover:bg-gold hover:text-ivory transition">Open the invitation</Link>
  </main>;
}
