import { getHeroeById } from "../src/08-imp-exp";
describe("eigth", () => {
  test("getHeroeById", () => {
    expect(getHeroeById(1)).toStrictEqual({
      id: 1,
      name: "Batman",
      owner: "DC"
    });
  });
});
