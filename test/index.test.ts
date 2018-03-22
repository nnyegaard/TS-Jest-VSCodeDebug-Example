import { add } from "./../src/add";

it("Should add two numbers", () => {
  const result = add(2, 2);
  expect(result).toEqual(4);
});
