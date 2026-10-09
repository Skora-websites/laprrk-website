export type ScopeItem = { title: string; body: string };
export type FaqItem = { q: string; a: string };
export type RelatedLink = { label: string; href: string };
export type ArticleItem = {
  href: string; pill: string; meta: string; title: string; body: string; linkLabel?: string;
};

export type PageBlock =
  | { kind: "scope"; title: string; lede?: string; items: ScopeItem[] }
  | { kind: "points"; title: string; lede?: string; tint?: boolean; items: string[] }
  | { kind: "stats"; title?: string; items: { v: string; l: string }[] }
  | { kind: "steps"; title?: string; lede?: string }
  | { kind: "faqs"; title?: string; items: FaqItem[] }
  | { kind: "articles"; title: string; lede?: string; items: ArticleItem[] }
  | { kind: "body"; title?: string; paragraphs: string[] }
  | {
      kind: "roles";
      title: string;
      lede?: string;
      groups: { id: string; title: string; roles: string[] }[];
    };

export type PageData = {
  slug: string;
  title: string;
  crumb?: string;
  description: string;
  eyebrow: string;
  lede: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  blocks: PageBlock[];
  related: RelatedLink[];
};
