import crypto from "crypto";

import fs from "fs";
import { Person } from "../types/Person";

export function generateHash(input: string) {
  if (!input) {
    throw new Error("input is required");
  }
  return crypto.createHash("sha256").update(input).digest("hex");
}

export function writeDataToFile(path: string, data: Person) {
  fs.writeFileSync("./person.json", JSON.stringify(data, null, 2));
}
