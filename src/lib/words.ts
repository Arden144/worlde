import raw from "./words.txt?raw";

export const words = new Set<string>(JSON.parse(raw));
