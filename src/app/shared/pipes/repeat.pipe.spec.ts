import { RepeatPipe } from './repeat.pipe';

describe('RepeatPipe', () => {
  let pipe: RepeatPipe;

  beforeEach(() => {
    pipe = new RepeatPipe();
  });

  describe('transform', () => {
    function runTest(value: string, times: number, expectedValue: string) {
      const result = pipe.transform(value, times);
      expect(result).toEqual(expectedValue);
    }

    it('when passed undefined & 1, returns empty string', () => runTest(undefined, 1, ''));
    it('when passed null & 1, returns empty string', () => runTest(null, 1, ''));
    it('when passed empty string & 1, returns empty string', () => runTest('', 1, ''));
    it('when passed "hello" & 1, returns "hello"', () => runTest('hello', 1, 'hello'));

    it('when passed "hello" & 0, returns empty string', () => runTest('hello', 0, ''));
    it('when passed "hello" & -1, returns empty string', () => runTest('hello', -1, ''));
    it('when passed "hello" & null, returns empty string', () => runTest('hello', null, ''));
    it('when passed null & null, returns empty string', () => runTest(null, null, ''));
    it('when passed "hello" & 3, returns "hellohellohello"', () => runTest('hello', 3, 'hellohellohello'));
  });
});