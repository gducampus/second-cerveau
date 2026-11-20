// Données d'exemple : à remplacer par des requêtes Supabase.
// Les fonctions sont asynchrones pour que le remplacement ne change pas les pages.

export type Document = {
  id: string;
  titre: string;
  type: string;
  ajouteLe: string; // date ISO
};

export type Validation = {
  id: string;
  titre: string;
  demandeePar: string;
  demandeeLe: string; // date ISO
};

export type Compteurs = {
  documents: number;
  souvenirs: number;
  taches: number;
};

export async function getCompteurs(): Promise<Compteurs> {
  return { documents: 128, souvenirs: 342, taches: 17 };
}

export async function getDerniersDocuments(): Promise<Document[]> {
  return [
    { id: "1", titre: "Compte rendu de la réunion de lancement", type: "Note", ajouteLe: "2026-11-19" },
    { id: "2", titre: "Cahier des charges du projet", type: "PDF", ajouteLe: "2026-11-18" },
    { id: "3", titre: "Idées pour le site web", type: "Note", ajouteLe: "2026-11-16" },
    { id: "4", titre: "Budget prévisionnel 2027", type: "Tableur", ajouteLe: "2026-11-14" },
    { id: "5", titre: "Article sur la gestion des connaissances", type: "Lien", ajouteLe: "2026-11-12" },
  ];
}

export async function getValidationsEnAttente(): Promise<Validation[]> {
  return [
    { id: "1", titre: "Archiver 12 documents anciens", demandeePar: "Assistant", demandeeLe: "2026-11-19" },
    { id: "2", titre: "Envoyer le résumé hebdomadaire par e-mail", demandeePar: "Mission « Veille »", demandeeLe: "2026-11-18" },
    { id: "3", titre: "Fusionner deux souvenirs en doublon", demandeePar: "Assistant", demandeeLe: "2026-11-17" },
  ];
}

export type TypeDocument = "PDF" | "Note" | "Lien";
export type StatutDocument = "Traité" | "En cours de traitement" | "En erreur";

export type DocumentListe = {
  id: string;
  titre: string;
  type: TypeDocument;
  statut: StatutDocument;
  ajouteLe: string; // date ISO
};

export async function getDocuments(): Promise<DocumentListe[]> {
  return [
    { id: "1", titre: "Compte rendu de la réunion de lancement", type: "Note", statut: "Traité", ajouteLe: "2026-11-19" },
    { id: "2", titre: "Cahier des charges du projet", type: "PDF", statut: "En cours de traitement", ajouteLe: "2026-11-18" },
    { id: "3", titre: "Idées pour le site web", type: "Note", statut: "Traité", ajouteLe: "2026-11-16" },
    { id: "4", titre: "Rapport annuel 2025", type: "PDF", statut: "En erreur", ajouteLe: "2026-11-15" },
    { id: "5", titre: "Article sur la gestion des connaissances", type: "Lien", statut: "Traité", ajouteLe: "2026-11-12" },
    { id: "6", titre: "Documentation de l'API Supabase", type: "Lien", statut: "En cours de traitement", ajouteLe: "2026-11-10" },
  ];
}
