import { Character } from "./character";
export type FilterResult = {
    "info": {
      "count": number
    },
    "data": Array<Character> | Character,
  }