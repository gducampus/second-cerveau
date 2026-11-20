export default function Compteur({
  libelle,
  valeur,
}: {
  libelle: string;
  valeur: number;
}) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white px-5 py-4">
      <p className="text-sm text-stone-600">{libelle}</p>
      <p className="mt-1 text-3xl font-semibold tabular-nums text-stone-900">
        {valeur.toLocaleString("fr-FR")}
      </p>
    </div>
  );
}
