import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white">
      <h1 className="text-3xl font-bold">Pixura</h1>
      <nav>
        <ul className="flex items-center gap-4">
          <li>Pricing</li>
          <li>About</li>
          <li>
            <Link href="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}