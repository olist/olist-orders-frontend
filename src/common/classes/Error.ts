import { ApiErrors, ErrorTest } from '~common/enums/Error';
import { ErrorPayload } from '~common/types/Error';

const AllEnums = { ...ApiErrors, ...ErrorTest };

class ErrorAdapter {
  public type = '';

  public message = '';

  constructor({ message, type }: ErrorPayload) {
    this.type = type;
    this.message = message;
  }

  public getByType(): string {
    return AllEnums[this.type];
  }

  public getByMessage(): string {
    return AllEnums[this.message];
  }
}

export default ErrorAdapter;
