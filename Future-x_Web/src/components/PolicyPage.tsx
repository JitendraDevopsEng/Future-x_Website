import type { ReactNode } from "react";
import Seo from "./Seo";

export type PolicySection = { title: string; content: ReactNode };

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  path: string;
  updated?: string;
  sections: PolicySection[];
};

export default function PolicyPage({ eyebrow = "Trust center", title, description, path, updated = "29 June 2026", sections }: Props) {
  return <main id="main-content" className="page-main">
    <Seo title={`${title} | Future-X`} description={description} path={path} />
    <header className="page-hero compact">
      <div className="container narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p><small>Last updated: {updated}</small></div>
    </header>
    <div className="policy-layout container narrow">
      {sections.map(section => <section key={section.title} className="policy-section"><h2>{section.title}</h2><div>{section.content}</div></section>)}
      <aside className="policy-contact"><strong>Questions about this policy?</strong><a href="mailto:admin@future-x.co.in">admin@future-x.co.in</a></aside>
    </div>
  </main>;
}
