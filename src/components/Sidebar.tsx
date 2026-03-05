import { LayoutDashboard, PanelTop, Settings, Activity } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Activity className="w-6 h-6 text-emerald-500" />
          <span>SolarIoT</span>
        </div>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-600/10 text-blue-400 font-medium"
            >
              <PanelTop className="w-5 h-5" />
              <span>Gestión de Paneles</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Configuración</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
