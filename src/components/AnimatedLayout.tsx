"use client";

import React from "react";

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark p-10 sm:p-12 md:p-16 flex items-center justify-center overflow-auto">
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  );
}
