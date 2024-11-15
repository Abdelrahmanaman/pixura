import React from "react";
import Authentication from "./_components/Authentication";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-1 grid place-content-center space-y-6 px-5 text-white md:mt-60">
      <Authentication />
      {children}
    </div>
  );
}
