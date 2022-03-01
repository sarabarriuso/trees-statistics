/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_STATUS_NO_CONTENT } from '../constants/httpResponses';
import { isNullOrUndefined, isNullUndefinedOrEmpty } from './nullChecks';
import { ResponseError } from './responseError';

type ReturnType = any;

export async function del(url: string, data: any): Promise<ReturnType> {
  return await performFetch(url, 'DEL', data);
}

export async function put(url: string, data?: any): Promise<ReturnType> {
  return await performFetch(url, 'PUT', data);
}

export async function post(url: string, data?: any): Promise<ReturnType> {
  return await performFetch(url, 'POST', data);
}

export async function get(url: string): Promise<ReturnType> {
  return await performFetch(url, 'GET');
}

async function performFetch(
  url: string,
  method: string,
  data?: any,
): Promise<ReturnType> {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  };

  const body = !isNullOrUndefined(data) ? JSON.stringify(data) : undefined;

  const response: Response = await fetch(url, {
    method: method,
    body: body,
    headers: { ...headers },
  });

  if (response.status === HTTP_STATUS_NO_CONTENT) {
    return undefined;
  }

  const textResponse = await response.text();

  if (response.headers.get('Content-Type') === 'text/plain' && response.ok) {
    return textResponse;
  }

  const deserialisedResponse: ReturnType = !isNullUndefinedOrEmpty(textResponse)
    ? JSON.parse(textResponse)
    : undefined;

  if (!response.ok) {
    const error = deserialisedResponse as Error;

    throw new ResponseError(
      error?.message,
      response.status,
      deserialisedResponse,
    );
  }

  return deserialisedResponse;
}
