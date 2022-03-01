export interface IEcologiTreeDataResponse {
  readonly responseCode: string;
  readonly responseText: string;
  readonly data: ReadonlyArray<ReadonlyArray<number>>;
}
