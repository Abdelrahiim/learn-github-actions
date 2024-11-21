import fs from "fs";
import { writeDataToFile } from "../utils/hashing";
import type { Person } from "../types/Person";

// Mock fs module with jest
jest.mock("fs")

describe("WriteFile", () => {

  const mockPerson: Person = {
    name: "Abdelrhiim",
    age: 27,
    id: "32",
    languages: ["Arabic", 'English'],
    address: {
      street: 'El-gish St',
      city: 'Sherbin',
      state: 'Egypt'
    }
  }
  
  const mockedFilePath = "./person.json"

  it("should write the Person object to a JSON file", () => {
    writeDataToFile(mockedFilePath, mockPerson)
    expect(fs.writeFileSync).toHaveBeenCalledWith("./person.json", JSON.stringify(mockPerson, null, 2))
  })

  it("should throw an error if the file cannot be written", () => {
    (fs.writeFileSync as jest.Mock).mockImplementationOnce(() => {
      throw new Error("Failed to write file")
    })

    expect(() => writeDataToFile(mockedFilePath, mockPerson)).toThrow("Failed to write file")
  })
})