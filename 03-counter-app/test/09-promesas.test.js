import { getHeroeByIdAsync } from "../src/09-promesas";
test("nine", () => {
  getHeroeByIdAsync(100).then((heroe) => {
    expect(heroe).toBeFalsy();
    done();
  });
});
//# sourceMappingURL=09-promesas.test.js.map
