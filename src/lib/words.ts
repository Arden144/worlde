import raw from "../../static/words.txt?raw";

export const words = new Set<string>(JSON.parse(raw));
