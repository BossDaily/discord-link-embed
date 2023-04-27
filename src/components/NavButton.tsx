"use client";

import { Button } from "flowbite-react";

export default function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <Button className="w-32" style={{ backgroundColor: "rgb(68 69 231)" }}>
      {children}
    </Button>
  );
}
