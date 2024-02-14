import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

describe("Sumar", () => {
  it("debería sumar dos números", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});

describe("Multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
});
