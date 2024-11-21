export type Person = {
  id: string;
  name: string;
  age: number;
  languages: Array<string>;
  address: {
    street: string;
    city: string;
    state: string;
  };
};
