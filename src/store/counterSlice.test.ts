import { describe, expect, test } from "vitest";
import reducer, {
  decrement,
  decrementBy10,
  increment,
  incrementBy10,
} from "./counterSlice";

describe("counterSlice", () => {
  test("test etat initial", () => {
    const result = reducer(undefined, { type: "" });
    expect(result).toEqual({
      value: 0,
    });
  });

  test("test increment", () => {
    const result = reducer({ value: 1 }, increment());
    expect(result).toEqual({ value: 2 });
  });

  test("test decrement", () => {
    const result = reducer({ value: 10 }, decrement());
    expect(result).toEqual({ value: 9 });
  });

  test("test increment par 10", () => {
    const result = reducer({ value: 99 }, incrementBy10());
    expect(result).toEqual({ value: 109 });
  });

  describe("counter slice decrement", () => {
    test("test decrement par 10", () => {
      const result = reducer({ value: 11 }, decrementBy10());
      expect(result).toEqual({ value: 1 });
    });

    test("test decrement par 10", () => {
      const result = reducer({ value: 9 }, decrementBy10());
      expect(result).toEqual({ value: 0 });
    });
  })
});
