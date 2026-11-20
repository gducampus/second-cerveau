export const pages = [
  {
    href: "/",
    titre: "Tableau de bord",
    description:
      "Vue d'ensemble de votre second cerveau : l'essentiel de l'activité en un coup d'œil.",
  },
  {
    href: "/documents",
    titre: "Documents",
    description:
      "Rassemble et organise tous vos documents, notes et fichiers de référence.",
  },
  {
    href: "/memoire",
    titre: "Mémoire",
    description:
      "Conserve les informations, souvenirs et connaissances à retrouver facilement plus tard.",
  },
  {
    href: "/discussion",
    titre: "Discussion",
    description:
      "Espace d'échange pour dialoguer avec votre assistant et explorer vos idées.",
  },
  {
    href: "/missions",
    titre: "Missions",
    description:
      "Définit les objectifs confiés à l'assistant et suit leur avancement.",
  },
  {
    href: "/validations",
    titre: "Validations",
    description:
      "Liste les actions en attente de votre accord avant qu'elles ne soient menées à terme.",
  },
  {
    href: "/taches",
    titre: "Tâches",
    description:
      "Regroupe les tâches à réaliser, en cours ou terminées.",
  },
  {
    href: "/supervision",
    titre: "Supervision",
    description:
      "Permet de surveiller le fonctionnement du système et de contrôler ce qu'il fait.",
  },
] as const;

export type Page = (typeof pages)[number];

export function getPage(href: Page["href"]): Page {
  return pages.find((p) => p.href === href)!;
}
