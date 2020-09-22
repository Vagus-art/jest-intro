import { functions } from "./index";

describe("my first test suite", () => {
  test("adds 2 + 2", () => {
    expect(functions.add(2, 2)).toBe(4);
  });
});
