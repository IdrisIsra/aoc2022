import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n\n")[1]
    .split("\n")
    .map((command) => (command.match(/(\d+)/g) ?? []).map(Number));

const rawStacks = [
  "DTRBJLWG",
  "SWC",
  "RZTM",
  "DTCHSPV",
  "GPTLDZ",
  "FBRZJQCD",
  "SBDJMFTR",
  "LHRBTVM",
  "QPDSV",
];

const stacks = rawStacks.map((stack) => stack.split(""));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  for (let [amount, from, to] of input) {
    const source = stacks[from - 1];
    const target = stacks[to - 1];

    while (amount && source.length > 0) {
      target.push(source.pop() as string);
      amount--;
    }
  }

  return stacks
    .map((stack) => stack.at(-1))
    .filter(Boolean)
    .join("");
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const temp = [];

  for (let [amount, from, to] of input) {
    const source = stacks[from - 1];
    const target = stacks[to - 1];

    while (amount && source.length > 0) {
      temp.push(source.pop() as string);
      amount--;
    }

    while (temp.length > 0) {
      target.push(temp.pop() as string);
    }
  }

  return stacks
    .map((stack) => stack.at(-1))
    .filter(Boolean)
    .join("");
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
