/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Wizard } from "./components/Wizard";
import { Success } from "./components/Success";

export default function App() {
  const [view, setView] = useState<"dashboard" | "wizard" | "success">(
    "dashboard",
  );

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {view === "dashboard" && (
            <Dashboard onNewPanel={() => setView("wizard")} />
          )}
          {view === "wizard" && (
            <Wizard
              onCancel={() => setView("dashboard")}
              onSuccess={() => setView("success")}
            />
          )}
          {view === "success" && (
            <Success
              onGoToDashboard={() => setView("dashboard")}
              onNewPanel={() => setView("wizard")}
            />
          )}
        </main>
      </div>
    </div>
  );
}
