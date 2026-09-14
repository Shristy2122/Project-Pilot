"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, CheckSquare, Calendar, Sparkles, Users, BarChart3, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Avatar from "@/components/ui/Avatar";

const NAV_ITEMS = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", href: "/projects", icon: FolderKanban, badge: "4" },
  { title: "Tasks", href: "/tasks", icon: CheckSquare, badge: "12" },
  { title: "Calendar", href: "/calendar", icon: Calendar },
  { title: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
  { title: "Team", href: "/team", icon: Users },
  { title: "Reports", href: "/reports", icon: BarChart3 },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between h-screen sticky top-0 select-none">
      <div>
        <div className="p-5 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-md">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <div>
            <span className="font-bold text-base text-slate-900">ProjectPilot</span>
            <p className="text-[10px] text-slate-400 font-medium">Plan Smarter. Build Faster.</p>
          </div>
        </div>

        <nav className="p-3 space-y-1">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase">Workspace</div>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={cn("flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all", isActive ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-600 hover:bg-slate-50")}>
                <div className="flex items-center gap-2.5">
                  <Icon className={cn("w-4 h-4", isActive ? "text-indigo-600" : "text-slate-400")} />
                  <span>{item.title}</span>
                </div>
                {item.badge && <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-indigo-100 text-indigo-700">{item.badge}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-slate-100">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center gap-2.5">
          <Avatar name="Shristy Sharma" size="sm" status="online" />
          <div>
            <p className="text-xs font-semibold text-slate-900">Shristy Sharma</p>
            <p className="text-[10px] text-slate-500">Product Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
