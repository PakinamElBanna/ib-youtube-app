import { NumbersSuffixPipe } from './numbers-suffix.pipe';

describe('NumbersSuffixPipe', () => {
  it('create an instance', () => {
    const pipe = new NumbersSuffixPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a suffix representation of a number decimal', () => {
    const pipe = new NumbersSuffixPipe();
    expect(pipe.transform(1000)).toEqual('1K');
    expect(pipe.transform(1000000)).toEqual('1M');
  });

});
