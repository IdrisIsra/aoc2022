import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n\n")
    .filter(Boolean)
    .map((elf) => elf.split("\n").filter(Boolean));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const totals = input.map((elf) => {
    let acc = 0;
    elf.forEach((food) => {
      acc += Number(food);
    });
    return acc;
  });
  return Math.max(...totals);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const totals = input.map((elf) => {
    let acc = 0;
    elf.forEach((food) => {
      acc += Number(food);
    });
    return acc;
  });
  const first = Math.max(...totals);
  const second = Math.max(...totals.filter((t) => t !== first));
  const third = Math.max(...totals.filter((t) => t !== first && t !== second));
  return first + second + third;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
