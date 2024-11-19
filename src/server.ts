import crypto from 'crypto';
import fs from "fs";

export type Person = {
  id: string;
  name: string
  age: number
  languages: Array<string>
  address: {
    street: string;
    city: string;
    state: string
  }
}


export function generateHash(input: string) {
  if (!input) {
    throw new Error('input is required');
  }
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function writeDataToFile(path: string, data: Person) {
  fs.writeFileSync("./person.json", JSON.stringify(data, null, 2))
}

