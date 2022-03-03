/* eslint-disable @typescript-eslint/ban-types */
import { nameof } from '../utilities/nameofFactory';
import { isNullOrUndefined } from '../utilities/nullChecks';

const getIStdErrorResponseKey = nameof<IStdErrorResponse>();

export interface IStdErrorResponse {
  readonly message: string;
  readonly status?: number;
}

export function isIStdErrorResponse(
  obj: {} | undefined,
): obj is IStdErrorResponse {
  return !isNullOrUndefined(obj) && getIStdErrorResponseKey('message') in obj;
}
