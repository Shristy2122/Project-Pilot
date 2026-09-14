import React from "react";
import { cn } from "@/lib/utils";

export default function ProgressBar({ value = 0, color = "brand", showLabel = false, size = "md", className }: any) {
  const clamped = Math.min(100, Math.max(0, value));
  const colorClasses: any = { brand: "bg-indigo-600", emerald: "bg-emerald-500", amber: "bg-amber-500", rose: "bg-rose-500" };
  const sizeClasses: any = { sm: "h-1.5", md: "h-2", lg: "h-3" };
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1 text-xs font-medium text-slate-600">
          <span>Progress</span>
          <span>{clamped}%</span>
        </div>
      )}
      <div className={cn("w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50", sizeClasses[size])}>
        <div className={cn("h-full transition-all duration-300 rounded-full", colorClasses[color] || "bg-indigo-600")} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}
