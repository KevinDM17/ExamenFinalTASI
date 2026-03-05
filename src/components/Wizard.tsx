import { useState } from "react";
import {
  ChevronRight,
  ArrowLeft,
  MapPin,
  PanelTop,
  Cpu,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function Wizard({
  onCancel,
  onSuccess,
}: {
  onCancel: () => void;
  onSuccess: () => void;
}) {
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, name: "Ubicación", icon: MapPin },
    { id: 2, name: "Datos del Panel", icon: PanelTop },
    { id: 3, name: "Terminal IoT", icon: Cpu },
    { id: 4, name: "Confirmación", icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 rounded-full z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>

          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isCompleted = step > s.id;

            return (
              <div
                key={s.id}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                      : isCompleted
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-slate-300 text-slate-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs font-medium absolute -bottom-6 whitespace-nowrap ${
                    isActive
                      ? "text-blue-700"
                      : isCompleted
                        ? "text-slate-700"
                        : "text-slate-400"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-12">
        {step === 1 && <Step1 onNext={() => setStep(2)} onCancel={onCancel} />}
        {step === 2 && (
          <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <Step3 onNext={() => setStep(4)} onBack={() => setStep(2)} />
        )}
        {step === 4 && <Step4 onNext={onSuccess} onBack={() => setStep(3)} />}
      </div>
    </div>
  );
}

function Step1({
  onNext,
  onCancel,
}: {
  onNext: () => void;
  onCancel: () => void;
}) {
  const [cliente, setCliente] = useState("Empresa Energía Solar S.A.");
  const [zona, setZona] = useState("Planta Norte - Desierto");
  const [sector, setSector] = useState("Sector Alpha");
  const [bloque, setBloque] = useState("B-01");
  const isError = bloque === "B-02"; // Simulate error for B-02
  const isValid = cliente !== "" && zona !== "" && sector !== "" && bloque !== "" && !isError;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Seleccionar Ubicación
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Cliente
          </label>
          <select value={cliente} onChange={(e) => setCliente(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option value="">Seleccione un cliente</option>
            <option value="Empresa Energía Solar S.A.">Empresa Energía Solar S.A.</option>
            <option value="Agroindustrias del Valle">Agroindustrias del Valle</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Zona Geográfica
          </label>
          <select value={zona} onChange={(e) => setZona(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option value="">Seleccione una zona</option>
            <option value="Planta Norte - Desierto">Planta Norte - Desierto</option>
            <option value="Planta Sur - Valle">Planta Sur - Valle</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Sector
          </label>
          <select value={sector} onChange={(e) => setSector(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option value="">Seleccione un sector</option>
            <option value="Sector Alpha">Sector Alpha</option>
            <option value="Sector Beta">Sector Beta</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Bloque de Instalación
          </label>
          <select
            value={bloque}
            onChange={(e) => setBloque(e.target.value)}
            className={`w-full bg-white border rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 outline-none transition-shadow ${
              isError
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
          >
            <option value="">Seleccione un bloque</option>
            <option value="B-01">Bloque 01 (Disponible)</option>
            <option value="B-02">Bloque 02 (Lleno)</option>
          </select>
        </div>

        {isError && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>
              <strong>Error:</strong> El bloque ha alcanzado su capacidad máxima
              de paneles. Seleccione otro bloque disponible.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={onCancel}
          className="px-5 py-2.5 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          Cancelar
        </button>
        <button
          onClick={onNext}
          disabled={isError}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [tipo, setTipo] = useState("Monocristalino 500W");
  const [nombre, setNombre] = useState("PNL-Norte-A1-125");
  const [serie, setSerie] = useState("SN-99823-XYZ");
  const [posFila, setPosFila] = useState("12");
  const [posCol, setPosCol] = useState("5");
  const [fecha, setFecha] = useState("2023-10-25");
  const [estado, setEstado] = useState("Operativo");
  const isError = posFila === "12" && posCol === "5"; // Simulate error for 12,5
  const isValid = tipo !== "" && nombre.trim() !== "" && serie.trim() !== "" && posFila !== "" && posCol !== "" && fecha !== "" && estado !== "" && !isError;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Datos del Panel</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Tipo de Panel Solar
          </label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option value="">Seleccione un tipo</option>
            <option value="Monocristalino 500W">Monocristalino 500W</option>
            <option value="Policristalino 330W">Policristalino 330W</option>
          </select>
          <p className="text-xs text-slate-500 mt-1.5">
            Debe coincidir con el permitido en el bloque.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Nombre del Panel
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Número de Serie
            </label>
            <input
              type="text"
              value={serie}
              onChange={(e) => setSerie(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Posición Fila
            </label>
            <input
              type="number"
              value={posFila}
              onChange={(e) => setPosFila(e.target.value)}
              className={`w-full bg-white border rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 outline-none transition-shadow ${
                isError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Posición Columna
            </label>
            <input
              type="number"
              value={posCol}
              onChange={(e) => setPosCol(e.target.value)}
              className={`w-full bg-white border rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 outline-none transition-shadow ${
                isError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
          </div>
        </div>

        {isError && (
          <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> Error: Esta posición ya está
            ocupada.
          </p>
        )}

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Fecha de Instalación
            </label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Estado del Panel
            </label>
            <select value={estado} onChange={(e) => setEstado(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
              <option value="">Seleccione un estado</option>
              <option value="Operativo">Operativo</option>
              <option value="Mantenimiento">Mantenimiento</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        <button
          onClick={onNext}
          disabled={isError}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Step3({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [nombre, setNombre] = useState("Term-IoT-Norte-125");
  const [mac, setMac] = useState("00:1B:44:11:3A:B7");
  const [estado, setEstado] = useState("Activo (Transmitiendo)");
  const isError = mac === "00:1B:44:11:3A:B7"; // Simulate error for this specific MAC
  const isValid = nombre.trim() !== "" && mac.trim() !== "" && estado !== "" && !isError;

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Registro de Terminal IoT
      </h2>

      {isError && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
          <div>
            <h4 className="font-medium text-amber-900">
              Conflicto de Identificador
            </h4>
            <p className="text-sm mt-1">
              Error: Este identificador MAC ya existe y está vinculado a otro
              panel. Verifique el dispositivo o ingrese una MAC diferente.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Nombre del Terminal
          </label>
          <input
            type="text"
            defaultValue="Term-IoT-Norte-125"
            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Identificador de Red (MAC)
          </label>
          <input
            type="text"
            value={mac}
            onChange={(e) => setMac(e.target.value)}
            placeholder="00:00:00:00:00:00"
            className={`w-full bg-white border rounded-lg px-4 py-2.5 font-mono text-slate-900 focus:ring-2 outline-none transition-shadow ${
              isError
                ? "border-amber-400 focus:ring-amber-500 focus:border-amber-500"
                : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Estado de Conectividad
          </label>
          <select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow">
            <option>Activo (Transmitiendo)</option>
            <option>Inactivo</option>
            <option>Pendiente de Vinculación</option>
          </select>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        <button
          onClick={onNext}
          disabled={isError}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Step4({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6">
        Confirme los datos del registro
      </h2>

      <div className="space-y-4">
        {/* Card 1 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-slate-800 font-medium">
            <MapPin className="w-4 h-4 text-blue-600" />
            <h3>Jerarquía de Ubicación</h3>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div>
              <span className="block text-slate-500 mb-0.5">Cliente</span>
              <span className="font-medium text-slate-900">
                Empresa Energía Solar S.A.
              </span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">
                Zona Geográfica
              </span>
              <span className="font-medium text-slate-900">
                Planta Norte - Desierto
              </span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">Sector</span>
              <span className="font-medium text-slate-900">Sector Alpha</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">Bloque</span>
              <span className="font-medium text-slate-900">Bloque 01</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-slate-800 font-medium">
            <PanelTop className="w-4 h-4 text-blue-600" />
            <h3>Detalles del Panel</h3>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div>
              <span className="block text-slate-500 mb-0.5">Nombre</span>
              <span className="font-medium text-slate-900">
                PNL-Norte-A1-125
              </span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">
                Número de Serie
              </span>
              <span className="font-medium text-slate-900">SN-99823-XYZ</span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">Posición</span>
              <span className="font-medium text-slate-900">
                Fila 12, Columna 6
              </span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">Tipo</span>
              <span className="font-medium text-slate-900">
                Monocristalino 500W
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3 text-slate-800 font-medium">
            <Cpu className="w-4 h-4 text-blue-600" />
            <h3>Terminal IoT</h3>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
            <div>
              <span className="block text-slate-500 mb-0.5">MAC Address</span>
              <span className="font-mono font-medium text-slate-900">
                00:1B:44:11:3A:C9
              </span>
            </div>
            <div>
              <span className="block text-slate-500 mb-0.5">Estado</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3" /> Activo
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          Guardar y Registrar
          <CheckCircle2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
