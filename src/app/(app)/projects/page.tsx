"use client";
import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

export default function ProjectsPage() {
  const projects = [
    { id: "1", title: "AI-Based IoT Anomaly Detection", category: "AI & ML", progress: 72, tasks: "18/25 Tasks", due: "Oct 24, 2026" },
    { id: "2", title: "Portfolio Website & Design System", category: "Web Dev", progress: 100, tasks: "12/12 Tasks", due: "Completed" },
    { id: "3", title: "College Event Management Portal", category: "Product", progress: 45, tasks: "9/20 Tasks", due: "Nov 12, 2026" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Projects</h1>
          <p className="text-xs text-slate-500">Organize and monitor sprint initiatives.</p>
        </div>
        <Link href="/projects/new"><Button variant="primary" size="sm"><Plus className="w-4 h-4 mr-1" /> Create Project</Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant="brand" size="sm">{p.category}</Badge>
                <span className="text-[11px] text-slate-400 font-medium">Due {p.due}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
              <ProgressBar value={p.progress} color="brand" showLabel size="sm" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
