import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "soft";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]";
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm border border-transparent",
      secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-transparent",
      outline: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-sm",
      ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      danger: "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
      soft: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200",
    };
    const sizes = {
      sm: "text-xs px-3 py-1.5 h-8 gap-1.5",
      md: "text-sm px-4 py-2 h-9.5 gap-2",
      lg: "text-base px-5 py-2.5 h-11 gap-2.5",
      icon: "h-9 w-9 p-0",
    };
    return (
      <button ref={ref} disabled={disabled || isLoading} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current mr-1.5" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
