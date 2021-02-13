import cipher from '../src/cipher.js';

describe('cipher', () => {

  test('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    test('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    test('should return "EFGHIJKLMNOPQRSTUVWXYZ" for "ABCDEFGHIJKLMNOPQRSTUV" with offset 4', () => {
      //completa este test!
        expect(cipher.encode("ABC", 4)).toBe("EFG");

    });
    test('should return "cdefghijklmnopqrstuvwxyz" for "abcdefghijklmnopqrstuvwx" with offset 2', () => {
      //completa este test!
        expect(cipher.encode("abc", 2)).toBe("cde");

    });

  });

  describe('cipher.decode', () => {

    test('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    test('should return "ABCDEFGHIJKLMNOPQ" for "EFGHIJKLMNOPQRSTU" with offset -4', () => {
      //completa este test!
      expect(cipher.decode("EFG", 4)).toBe("ABC");
    });
    test('should return "abcdefghijklmnopq" for "efghijklmnopqrstu" with offset -2', () => {
      //completa este test!
      expect(cipher.decode("opq", 2)).toBe("mno");
    });

  });

});