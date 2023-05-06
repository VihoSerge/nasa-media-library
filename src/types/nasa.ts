interface Metadata {
  total_hits: number;
}

interface SearchItemData {
  nasa_id: string;
  title: string;
  keywords: string[];
  photographer: string;
  description: string;
  location: string;
}

interface Link {
  href: string;
}

export interface SearchItem {
  href: string;
  data: SearchItemData[];
  links: Link[];
}

export interface SearchCollection {
  href: string;
  items: SearchItem[];
  links: any[];
  metadata: Metadata;
  version: string;
}

export interface SearchAPIParams {
  q: string;
  year_start: string;
  year_end: string;
}
