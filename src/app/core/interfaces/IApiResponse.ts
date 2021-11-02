export interface IApiResponse {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: any;
  pages?: number;
}