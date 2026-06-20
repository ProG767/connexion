import { describe, expect, test } from "vitest"
import { concat, concatToUpperCase } from "./strings-util"

describe("concatination string", () => {
    test("concatener deux chaines", () => {
        const result = concat("Dev. ", "Charafi");
        expect(result).toBe("Dev. Charafi")
    });

    test("concatener deux chaines vides", () => {
        const result = concat("", "");
        expect(result).toBe("")
    });

    test("concatener les espaces", () => {
        const result = concat("  ", "   ");
        expect(result).toBe("     ")
    });

    test("concatener les espaces", () => {
        const result = concat("  ", "ABC");
        expect(result).toBe("  ABC")
    });

    test("concatener un seul espace", () => {
        const result = concat(" ", "");
        expect(result).toBe(" ")
    });
});

describe("concat uppercase", () => {
    test("concatener deux chaines", () => {
        const result = concatToUpperCase("Dev. ", "Charafi");
        expect(result).toBe("DEV. CHARAFI")
    });

    test("concatener deux chaines vides", () => {
        const result = concatToUpperCase("", "");
        expect(result).toBe("")
    });

    test("concatener les espaces", () => {
        const result = concatToUpperCase("  ", "   ");
        expect(result).toBe("     ")
    });
})