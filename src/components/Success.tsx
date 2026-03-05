import { Check, ArrowRight, Plus, Eye } from "lucide-react";

export function Success({
  onGoToDashboard,
  onNewPanel,
}: {
  onGoToDashboard: () => void;
  onNewPanel: () => void;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-lg mx-auto text-center">
      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
        <Check className="w-12 h-12 text-emerald-600" strokeWidth={3} />
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-3">
        Panel solar registrado correctamente
      </h1>
      <p className="text-slate-500 text-lg mb-10">
        El monitoreo IoT se ha activado exitosamente y el dispositivo ya está
        transmitiendo datos.
      </p>

      <div className="flex flex-col w-full gap-3">
        <button
          onClick={onGoToDashboard}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium shadow-sm transition-colors text-lg"
        >
          Ir al monitoreo
          <ArrowRight className="w-5 h-5" />
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3.5 rounded-xl font-medium transition-colors">
          <Eye className="w-5 h-5" />
          Ver detalle del panel
        </button>

        <button
          onClick={onNewPanel}
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-xl font-medium transition-colors mt-2"
        >
          <Plus className="w-5 h-5" />
          Registrar otro panel
        </button>
      </div>
    </div>
  );
}
