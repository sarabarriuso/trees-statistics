export function isNullOrUndefined(
  data: unknown | null | undefined,
): data is null | undefined {
  return data === null || data === undefined;
}

type ReturnType = null | undefined | '';
export function isNullUndefinedOrEmpty(
  str: string | ReturnType,
): str is ReturnType {
  return isNullOrUndefined(str) || str === '';
}
