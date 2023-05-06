export interface Media {
  id: string;
  image: string;
  title: string;
  location: string;
  photographer?: string;
  keywords?: string[];
  dateCreated?: string;
}

export interface SearchParams {
  q: string;
  year_start: string;
  year_end: string;
}
