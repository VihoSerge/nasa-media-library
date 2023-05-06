export interface APIResponseCollection {
  href: string;
  items: any[];
  links: any[];
  metadata: [];
  version: string;
}

export interface SearchAPIParams {
  q: string;
  year_start: string;
  year_end: string;
}
