import { getPage, type Page } from "@/lib/pages";

export default function PageHeader({ href }: { href: Page["href"] }) {
  const { titre, description } = getPage(href);
  return (
    <header>
      <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
        {titre}
      </h1>
      <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
        {description}
      </p>
    </header>
  );
}
