import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function TasksPage() {
  const tasks = [
    { id: "1", title: "Data Preprocessing & Cleaning", project: "AI IoT", priority: "high", status: "In Progress", due: "Today" },
    { id: "2", title: "Model Training & Validation", project: "AI IoT", priority: "urgent", status: "Review", due: "Tomorrow" },
    { id: "3", title: "QR Code Check-in Flow", project: "Event Portal", priority: "medium", status: "Todo", due: "Sep 20" },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Tasks</h1>
        <p className="text-xs text-slate-500">Manage sprint items and subtasks.</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Active Task Queue</CardTitle></CardHeader>
        <CardContent className="divide-y divide-slate-100">
          {tasks.map((t) => (
            <div key={t.id} className="py-3 flex justify-between items-center text-xs">
              <div>
                <p className="font-bold text-slate-900">{t.title}</p>
                <p className="text-slate-400">{t.project} · Due {t.due}</p>
              </div>
              <Badge variant="brand" size="sm">{t.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
