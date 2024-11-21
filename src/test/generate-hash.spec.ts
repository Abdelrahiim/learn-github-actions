import { generateHash } from "../utils/hashing";


describe("generateHash", () => {
  it("should return a valid SHA-256 hash for a given input", () => {
    const input = "hello world";
    const expectedHash = "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
    const results = generateHash(input);
    expect(results).toBe(expectedHash);
  })

  it("should return different value for different inputs", () => {
    const firstInput = "input-1";
    const secondInput = "input-2";
    const hash1 = generateHash(firstInput);
    const hash2 = generateHash(secondInput);
    expect(hash1).not.toBe(hash2)
  })

  it("should return same value for same input", () => {
    const input = "hello world";
    const hash1 = generateHash(input);
    const hash2 = generateHash(input);
    expect(hash1).toBe(hash2);
  })
});