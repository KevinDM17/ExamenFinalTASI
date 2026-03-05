import {
  Plus,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Settings,
} from "lucide-react";

export function Dashboard({ onNewPanel }: { onNewPanel: () => void }) {
  const panels = [
    {
      id: "PNL-001",
      name: "Panel Norte A1",
      location: "Zona Norte > Sector 1",
      status: "Operativo",
      mac: "00:1B:44:11:3A:B7",
    },
    {
      id: "PNL-002",
      name: "Panel Norte A2",
      location: "Zona Norte > Sector 1",
      status: "Alerta",
      mac: "00:1B:44:11:3A:B8",
    },
    {
      id: "PNL-003",
      name: "Panel Sur B1",
      location: "Zona Sur > Sector 2",
      status: "Operativo",
      mac: "00:1B:44:11:3A:C1",
    },
    {
      id: "PNL-004",
      name: "Panel Este C1",
      location: "Zona Este > Sector 3",
      status: "Mantenimiento",
      mac: "00:1B:44:11:3A:D5",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Gestión de Paneles Solares
          </h1>
          <p className="text-slate-500 mt-1">
            Monitoreo y administración de activos IoT
          </p>
        </div>
        <button
          onClick={onNewPanel}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
        >
          <Plus className="w-5 h-5" />
          Registrar Nuevo Panel Solar
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="px-6 py-4">ID Panel</th>
                <th className="px-6 py-4">Nombre</th>
                <th className="px-6 py-4">Ubicación</th>
                <th className="px-6 py-4">Terminal MAC</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {panels.map((panel) => (
                <tr
                  key={panel.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {panel.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {panel.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {panel.location}
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    {panel.mac}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        panel.status === "Operativo"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : panel.status === "Alerta"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {panel.status === "Operativo" && (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      )}
                      {panel.status === "Alerta" && (
                        <AlertCircle className="w-3.5 h-3.5" />
                      )}
                      {panel.status === "Mantenimiento" && (
                        <Settings className="w-3.5 h-3.5" />
                      )}
                      {panel.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-100 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
          <span>Mostrando 4 de 124 paneles</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50 disabled:opacity-50">
              Anterior
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
