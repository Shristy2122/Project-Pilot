import React from "react";
import { cn } from "@/lib/utils";

export default function Avatar({ name = "Shristy Sharma", size = "md", status, className }: any) {
  const initials = name.split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase();
  const sizeClasses: any = { sm: "w-7 h-7 text-xs", md: "w-9 h-9 text-sm", lg: "w-11 h-11 text-base" };
  return (
    <div className="relative inline-block">
      <div className={cn("rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center border border-indigo-200 overflow-hidden select-none", sizeClasses[size], className)}>
        <span>{initials}</span>
      </div>
      {status && <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />}
    </div>
  );
}
