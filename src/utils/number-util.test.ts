import { describe, expect, test } from "vitest";
import { max, sum } from "./number-util";


describe("number sum", () => {
    test("somme deux entiers positifs", () => {
        const result = sum(1, 2);

        expect(result).toBe(3)
    })

    test("somme deux entiers positifs", () => {
        const result = sum(1, -1);

        expect(result).toBe(0)
    })
})


describe("max number", () => {
    test("max deux élèments positifs", () => {
        const result = max(2, 9);
        expect(result).toBe(9);
    });

    test("max deux élèments positifs", () => {
        const result = max(-2, -5);
        expect(result).toBe(-2);
    });


    test("max un élèment positif et négatif", () => {
        const result = max(-2, 10);
        expect(result).toBe(10);
    });
})