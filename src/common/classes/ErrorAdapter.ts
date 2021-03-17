import ErrorPayload from './ErrorPayload';

import { ApiErrors, ErrorTest } from '~common/enums/Error';

const AllEnums = { ...ApiErrors, ...ErrorTest };

class ErrorAdapter {
  private error: ErrorPayload = null;

  constructor(error: ErrorPayload) {
    this.error = error;
  }

  public getByMessage(): string {
    return AllEnums[this.error.message];
  }

  public getByType(): string {
    return AllEnums[this.error.type];
  }
}

export default ErrorAdapter;
