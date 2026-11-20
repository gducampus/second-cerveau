import Compteur from "@/components/Compteur";
import PageHeader from "@/components/PageHeader";
import { formaterDate } from "@/lib/dates";
import {
  getCompteurs,
  getDerniersDocuments,
  getValidationsEnAttente,
} from "@/lib/donnees-exemple";

export default async function TableauDeBord() {
  const [compteurs, documents, validations] = await Promise.all([
    getCompteurs(),
    getDerniersDocuments(),
    getValidationsEnAttente(),
  ]);

  return (
    <div className="space-y-8">
      <PageHeader href="/" />

      <section aria-label="Compteurs" className="grid gap-4 sm:grid-cols-3">
        <Compteur libelle="Documents" valeur={compteurs.documents} />
        <Compteur libelle="Souvenirs" valeur={compteurs.souvenirs} />
        <Compteur libelle="Tâches" valeur={compteurs.taches} />
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="titre-documents">
          <h2 id="titre-documents" className="text-lg font-semibold text-stone-900">
            Derniers documents
          </h2>
          <ul className="mt-3 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
            {documents.map((d) => (
              <li key={d.id} className="px-4 py-3">
                <p className="text-sm font-medium text-stone-900">{d.titre}</p>
                <p className="mt-0.5 text-sm text-stone-500">
                  {d.type} · ajouté le {formaterDate(d.ajouteLe)}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="titre-validations">
          <h2 id="titre-validations" className="text-lg font-semibold text-stone-900">
            Actions en attente de validation
          </h2>
          <ul className="mt-3 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
            {validations.map((v) => (
              <li key={v.id} className="px-4 py-3">
                <p className="text-sm font-medium text-stone-900">{v.titre}</p>
                <p className="mt-0.5 text-sm text-stone-500">
                  Demandée par {v.demandeePar} · le {formaterDate(v.demandeeLe)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
