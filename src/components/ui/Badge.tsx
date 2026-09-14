import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "success" | "warning" | "danger" | "info" | "outline";
  size?: "sm" | "md";
}

export default function Badge({ className, variant = "default", size = "md", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    brand: "bg-indigo-50 text-indigo-700 border-indigo-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    info: "bg-blue-50 text-blue-700 border-blue-200",
    outline: "bg-transparent text-slate-600 border-slate-300",
  };
  const sizes = { sm: "text-[11px] px-2 py-0.5 font-medium", md: "text-xs px-2.5 py-1 font-medium" };
  return <span className={cn("inline-flex items-center rounded-md border", variants[variant], sizes[size], className)} {...props}>{children}</span>;
}
