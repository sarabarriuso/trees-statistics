import { get } from '../utilities/httpUtilities';
import { ResponseError } from '../utilities/responseError';
import { IEcologiTreeDataResponse } from '../interfaces/responses/IEcologiTreeDataResponse';

function getBaseUrl(): string {
  return process.env.REACT_APP_ECOLOGI_SERVICE_URL ?? '';
}

export function getPlantedTreesData(): Promise<IEcologiTreeDataResponse> {
  const url = `${getBaseUrl()}trees`;
  return new Promise((resolve, reject) => {
    get(url)
      .then((data: IEcologiTreeDataResponse) => {
        resolve(data);
      })
      .catch((e: ResponseError) => {
        reject(e.message);
      });
  });
}
