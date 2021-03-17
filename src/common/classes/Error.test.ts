import ErrorAdapter from './Error';

import { ApiErrors, ErrorTest } from '~common/enums/Error';

describe('ErrorAdapter', () => {
  it('should return the message based on the information sent', () => {
    const type = 'API_ERROR';
    expect(new ErrorAdapter({ type }).getByType()).toBe(ApiErrors[type]);
  });

  it('should return the type based on the information sent', () => {
    const message = `X thing didn't respond the request`;
    expect(new ErrorAdapter({ message }).getByType()).toBe(ApiErrors[message]);
  });

  it('should return All types and messages from any Error enum', () => {
    const type = `fuzz`;
    const message = `X thing didn't respond the request`;
    expect(new ErrorAdapter({ type }).getByType()).toBe(ErrorTest[type]);
    expect(new ErrorAdapter({ message }).getByType()).toBe(ApiErrors[message]);
  });
});
