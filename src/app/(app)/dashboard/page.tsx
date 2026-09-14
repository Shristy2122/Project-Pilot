"use client";
import React from "react";
import { FolderKanban, CheckSquare, Clock, Sparkles, Plus } from "lucide-react";
import Link from "next/link";
import StatCard from "@/components/ui/StatCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Good morning, Shristy! 👋</h1>
          <p className="text-xs text-slate-500 mt-1">Here is what is happening with your projects today.</p>
        </div>
        <Link href="/projects/new">
          <Button variant="primary" size="sm"><Plus className="w-4 h-4 mr-1" /> New Project</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Active Projects" value="4" change="+2 this month" isPositive={true} icon={<FolderKanban className="w-4 h-4" />} />
        <StatCard title="Tasks Completed" value="28" change="+18.4%" isPositive={true} icon={<CheckSquare className="w-4 h-4" />} />
        <StatCard title="Hours Logged" value="142 hrs" change="-4.2%" isPositive={false} icon={<Clock className="w-4 h-4" />} />
        <StatCard title="AI Insights" value="19" change="Optimal" isPositive={true} icon={<Sparkles className="w-4 h-4" />} />
      </div>

      <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 text-white shadow-xl flex items-center justify-between">
        <div>
          <span className="text-[11px] font-semibold bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-300/20 text-indigo-200 uppercase">AI Sprint Insight</span>
          <p className="text-sm text-slate-200 mt-1">"Your AI IoT Anomaly Detection project is 72% complete and pacing on schedule for Oct 24."</p>
        </div>
        <Link href="/ai-assistant">
          <Button variant="primary" size="sm" className="bg-white text-slate-900 hover:bg-slate-100">View Recommendations</Button>
        </Link>
      </div>

      <Card>
        <CardHeader><CardTitle>Active Projects</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span>AI-Based IoT Anomaly Detection</span>
              <span>72%</span>
            </div>
            <ProgressBar value={72} color="brand" size="sm" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span>Portfolio Website & Design System</span>
              <span>100%</span>
            </div>
            <ProgressBar value={100} color="emerald" size="sm" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
