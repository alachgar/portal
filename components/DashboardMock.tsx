import { Alert } from "./Icons";

// Aperçu illustratif du tableau de bord du lundi (données fictives).
const rows = [
  { name: "Migration ERP", owner: "C. Martin", status: "En retard", tone: "danger", delta: "+12 j" },
  { name: "Refonte portail client", owner: "S. Benali", status: "À risque", tone: "warning", delta: "Jalon J-3" },
  { name: "Déploiement CRM", owner: "A. Petit", status: "Dans les temps", tone: "success", delta: "—" },
  { name: "Data platform", owner: "—", status: "Sans propriétaire", tone: "warning", delta: "Donnée manquante" },
] as const;

const toneClass = {
  danger: "bg-danger-bg text-danger",
  warning: "bg-warning-bg text-warning",
  success: "bg-success-bg text-success",
} as const;

export default function DashboardMock() {
  return (
    <div className="card p-0 shadow-md" role="img" aria-label="Exemple de tableau de bord PMO avec les indicateurs de la semaine">
      <div className="flex items-center justify-between border-b border-border bg-surface-300 px-s-5 py-s-3">
        <p className="font-display text-label uppercase">Comité du lundi</p>
        <p className="font-mono text-caption text-ink-muted">S48 · mis à jour 07:00</p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {[
          { v: "3", l: "Projets en retard" },
          { v: "5", l: "Jalons à risque" },
          { v: "+4,2 %", l: "Écart budget" },
          { v: "82/100", l: "Fiabilité données" },
        ].map((k) => (
          <div key={k.l} className="bg-surface-200 px-s-4 py-s-4">
            <p className="font-display text-heading-2">{k.v}</p>
            <p className="mt-1 text-caption text-ink-muted">{k.l}</p>
          </div>
        ))}
      </div>

      <table className="w-full text-left text-body-sm">
        <thead>
          <tr className="border-b border-border text-ink-muted">
            <th className="px-s-5 py-s-2 font-display text-label uppercase font-semibold">Projet</th>
            <th className="hidden px-s-2 py-s-2 font-display text-label uppercase font-semibold sm:table-cell">Pilote</th>
            <th className="px-s-5 py-s-2 font-display text-label uppercase font-semibold">Statut</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-border last:border-0">
              <td className="px-s-5 py-s-3">
                <span className="font-semibold">{r.name}</span>
                <span className="block font-mono text-caption text-ink-muted">{r.delta}</span>
              </td>
              <td className="hidden px-s-2 py-s-3 text-ink-muted sm:table-cell">{r.owner}</td>
              <td className="px-s-5 py-s-3">
                <span className={`badge ${toneClass[r.tone]}`}>
                  {r.tone !== "success" && <Alert className="h-3.5 w-3.5" />}
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
