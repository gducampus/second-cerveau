import PageHeader from "@/components/PageHeader";
import StatutBadge from "@/components/StatutBadge";
import { formaterDate } from "@/lib/dates";
import { getDocuments } from "@/lib/donnees-exemple";

const ajouts = [
  {
    titre: "Importer un PDF",
    description: "Ajoutez un fichier PDF depuis votre ordinateur.",
    action: "Choisir un fichier",
  },
  {
    titre: "Écrire une note",
    description: "Rédigez directement une note dans votre second cerveau.",
    action: "Nouvelle note",
  },
  {
    titre: "Ajouter un lien",
    description: "Enregistrez une page web à garder et à retrouver.",
    action: "Ajouter un lien",
  },
];

export default async function Documents() {
  const documents = await getDocuments();

  return (
    <div className="space-y-8">
      <PageHeader href="/documents" />

      <section aria-labelledby="titre-ajout">
        <h2 id="titre-ajout" className="text-lg font-semibold text-stone-900">
          Ajouter un document
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {ajouts.map((a) => (
            <div
              key={a.titre}
              className="flex flex-col rounded-lg border border-stone-200 bg-white p-5"
            >
              <h3 className="text-sm font-semibold text-stone-900">{a.titre}</h3>
              <p className="mt-1 flex-1 text-sm leading-6 text-stone-600">
                {a.description}
              </p>
              <button
                type="button"
                className="mt-4 self-start rounded-md border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-100"
              >
                {a.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="titre-liste">
        <h2 id="titre-liste" className="text-lg font-semibold text-stone-900">
          Tous les documents
        </h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-stone-200 bg-stone-50 text-stone-600">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">Titre</th>
                <th scope="col" className="px-4 py-3 font-medium">Type</th>
                <th scope="col" className="px-4 py-3 font-medium">Statut</th>
                <th scope="col" className="px-4 py-3 font-medium">Ajouté le</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {documents.map((d) => (
                <tr key={d.id}>
                  <td className="px-4 py-3 font-medium text-stone-900">{d.titre}</td>
                  <td className="px-4 py-3 text-stone-600">{d.type}</td>
                  <td className="px-4 py-3"><StatutBadge statut={d.statut} /></td>
                  <td className="whitespace-nowrap px-4 py-3 text-stone-600">
                    {formaterDate(d.ajouteLe)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
