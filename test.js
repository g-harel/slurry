const slurry = require("./index");

it("should call the original function when no args", () => {
  const test = jest.fn();
  const s = slurry(test);
  s();
  expect(test).toHaveBeenCalled();
});

it("should pass arguments to the original function", () => {
  const test = jest.fn();
  const s = slurry(test);
  const values = [12, 34];
  s(...values)();
  expect(test).toHaveBeenCalledWith(...values);
});

it("should accept arguments on creation", () => {
  const test = jest.fn();
  const values = [12, 34];
  const s = slurry(test, ...values);
  s(56)();
  expect(test).toHaveBeenCalledWith(...values, 56);
});

it("should accumulate arguments after every call", () => {
  const test = jest.fn();
  const s = slurry(test);
  const values = [12, 34, 56];
  s(values[0])(values[1], values[2])();
  expect(test).toHaveBeenCalledWith(...values);
});

it("should return the original function result", () => {
  const test = () => "test";
  const s = slurry(test);
  expect(s()).toBe("test");
});

it("should not share arguments between curried funcs", () => {
  const s = slurry((...args) => {
    return args;
  });
  const s1 = s(0);
  const s2 = s(1);
  expect(s1(0)()).toEqual([0, 0]);
  expect(s2(1)()).toEqual([1, 1]);
});

it("should satisfy the readme example", () => {
  const s = slurry((...args) => args);

  expect(s(0)(1)(2)()).toEqual([0, 1, 2]);
  expect(s(0, 1, 2)()).toEqual([0, 1, 2]);
  expect(s(0, 1)(2)()).toEqual([0, 1, 2]);

  let s1 = s(1);
  let s2 = s1(2);
  let s3 = s1(3);
  expect(s2()).toEqual([1, 2]);
  expect(s3()).toEqual([1, 3]);
});
