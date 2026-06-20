export function concat(s1: string, s2: string): string {
    return s1 + s2;
}

export function concatToUpperCase(s1: string, s2: string): string {
    return concat(s1, s2).toUpperCase();
}