import { CountUp } from "./Motion";
import { d } from "./delay";
import { Alert, Check } from "./Icons";

// Aperçu illustratif du tableau de bord du lundi (données fictives).
const rows = [
  { name: "Migration ERP", owner: "C. Martin", status: "En retard", tone: "danger", delta: "+12 j", p: 0.62 },
  { name: "Refonte portail client", owner: "S. Benali", status: "À risque", tone: "warning", delta: "Jalon J-3", p: 0.48 },
  { name: "Déploiement CRM", owner: "A. Petit", status: "Dans les temps", tone: "success", delta: "—", p: 0.81 },
  { name: "Data platform", owner: "—", status: "Sans propriétaire", tone: "warning", delta: "Donnée manquante", p: 0.3 },
] as const;

const toneClass = {
  danger: "bg-danger-bg text-danger",
  warning: "bg-warning-bg text-warning",
  success: "bg-success-bg text-success",
} as const;
const barClass = { danger: "bg-danger", warning: "bg-warning", success: "bg-success" } as const;

const kpis = [
  { v: "3", l: "Projets en retard" },
  { v: "5", l: "Jalons à risque" },
  { v: "+4,2 %", l: "Écart budget" },
  { v: "82/100", l: "Fiabilité données", bar: 0.82 },
];

export default function DashboardMock() {
  return (
    <div className="card relative p-0 shadow-md" role="img" aria-label="Exemple de tableau de bord PMO avec les indicateurs de la semaine">
      <div className="flex items-center justify-between border-b border-border bg-surface-300 px-s-5 py-s-3">
        <p className="flex items-center gap-s-2 font-display text-label uppercase">
          <span className="live-dot" aria-hidden /> Comité du lundi
        </p>
        <p className="font-mono text-caption text-ink-muted">S48 · mis à jour 07:00</p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {kpis.map((k, i) => (
          <div key={k.l} data-reveal="fade" style={d(400 + i * 90)} className="bg-surface-200 px-s-4 py-s-4">
            <p className="font-display text-heading-2"><CountUp value={k.v} /></p>
            <p className="mt-1 text-caption text-ink-muted">{k.l}</p>
            {k.bar && (
              <div className="mt-s-2 h-1 overflow-hidden rounded-pill bg-surface-300">
                <div className="bar h-full rounded-pill bg-action" style={{ "--v": k.bar } as React.CSSProperties} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative">
        <span className="scan" aria-hidden />
        <table className="w-full text-left text-body-sm">
          <thead>
            <tr className="border-b border-border text-ink-muted">
              <th className="px-s-5 py-s-2 font-display text-label font-semibold uppercase">Projet</th>
              <th className="hidden px-s-2 py-s-2 font-display text-label font-semibold uppercase sm:table-cell">Avancement</th>
              <th className="px-s-5 py-s-2 font-display text-label font-semibold uppercase">Statut</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} data-reveal style={d(700 + i * 120)} className="border-b border-border transition-colors last:border-0 hover:bg-surface-300/60">
                <td className="px-s-5 py-s-3">
                  <span className="font-semibold">{r.name}</span>
                  <span className="block font-mono text-caption text-ink-muted">{r.owner} · {r.delta}</span>
                </td>
                <td className="hidden w-[120px] px-s-2 py-s-3 sm:table-cell">
                  <div className="h-1.5 overflow-hidden rounded-pill bg-surface-300">
                    <div className={`bar h-full rounded-pill ${barClass[r.tone]}`} style={{ "--v": r.p } as React.CSSProperties} />
                  </div>
                </td>
                <td className="px-s-5 py-s-3">
                  <span className={`badge ${toneClass[r.tone]}`}>
                    {r.tone === "success" ? <Check className="draw h-3.5 w-3.5" /> : <Alert className="draw h-3.5 w-3.5" />}
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
