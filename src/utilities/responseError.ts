import {
  IStdErrorResponse,
  isIStdErrorResponse,
} from '../interfaces/stdErrorResponse';
import { STANDARD_ERROR_MESSAGE } from '../constants/errorMessages';
import { isNullOrUndefined } from './nullChecks';

export class ResponseError extends Error {
  private responseCode: number;
  private standardException: IStdErrorResponse | undefined;

  public constructor(
    message: string,
    responseCode: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    deserialisedResponse?: {},
  ) {
    super(message);

    this.responseCode = responseCode;
    this.standardException = isIStdErrorResponse(deserialisedResponse)
      ? deserialisedResponse
      : undefined;
  }

  public get ResponseCode(): number {
    return this.standardException?.status
      ? this.standardException.status
      : this.responseCode;
  }

  public get ViewableMessage(): string {
    return !isNullOrUndefined(this.standardException)
      ? this.standardException.message
      : STANDARD_ERROR_MESSAGE;
  }
}
