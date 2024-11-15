"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Authentication() {
  const pathname = usePathname();
  return (
    <div>
      <div className="relative inline-flex w-full items-center justify-center whitespace-nowrap rounded-3xl border border-primary p-0 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-sm">
        <div className="relative inline-flex h-10 w-full items-center justify-center gap-2 rounded-3xl bg-transparent p-1 text-muted-foreground">
          <Link
            href={"/login"}
            className={` ${pathname === "/login" ? "bg-primary text-white shadow-sm" : ""}inline-flex peer/login w-full items-center justify-center whitespace-nowrap rounded-3xl px-3 py-1.5 text-center text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
          >
            Log-in
          </Link>
          <Link
            href={"/signup"}
            className={` ${pathname === "/signup" ? "bg-primary text-white shadow-sm" : ""}inline-flex peer w-full items-center justify-center whitespace-nowrap rounded-3xl px-3 py-1.5 text-center text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
          >
            Sign-up
          </Link>
          <div
            className={`${pathname === "/signup" ? "left-52" : "left-2"} absolute top-1 -z-10 hidden size-1/2 h-8 w-48 rounded-3xl bg-primary transition-all delay-200 duration-500 peer-hover/login:left-3 peer-hover:left-52 peer-hover:bg-primary/60 md:block`}
          />
        </div>
      </div>
    </div>
  );
}
