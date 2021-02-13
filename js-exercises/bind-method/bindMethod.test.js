import { bind } from './bindMethod.js';

describe('bind method', () => {
  // Feel free to add more test cases
  test('should return a function', () => {
    const foo = function (x) {
      return x;
    };
    const obj = { a: 10 };
    expect(typeof bind(foo, obj)).toBe('function');
  });
  test('should hard bind a function to new context', () => {
    const foo = function (x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    var y = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(20);
  });
  test('should hard bind a function to new context with any key inside object', () => {
    const foo = function (x) {
      return this.any + x;
    };
    const obj = { any: 50 };
    var any = 100;
    const bar = bind(foo, obj);
    expect(bar(10)).toBe(60);
  });
  test('new funtion should return null if value is not a number', () => {
    const foo = function (x) {
      return this.y + x;
    };
    const obj = { y: 10 };
    const bar = bind(foo, obj);
    expect(bar('a')).toBe(null);
    expect(bar(true)).toBe(null);
    expect(bar(null)).toBe(null);
  });
});
