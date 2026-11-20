import type { StatutDocument } from "@/lib/donnees-exemple";

const styles: Record<StatutDocument, string> = {
  "Traité": "bg-emerald-50 text-emerald-800 ring-emerald-200",
  "En cours de traitement": "bg-amber-50 text-amber-800 ring-amber-200",
  "En erreur": "bg-red-50 text-red-800 ring-red-200",
};

export default function StatutBadge({ statut }: { statut: StatutDocument }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[statut]}`}
    >
      {statut}
    </span>
  );
}
