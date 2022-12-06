import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  for (let i = 3; i < input.length; i++) {
    if (
      input[i] !== input[i - 1] &&
      input[i] !== input[i - 2] &&
      input[i] !== input[i - 3] &&
      input[i - 1] !== input[i - 2] &&
      input[i - 1] !== input[i - 3] &&
      input[i - 2] !== input[i - 3]
    ) {
      return i + 1;
    }
  }
};

const runBackgroundCheck = (string: string) => {
  const seen: { [key: string]: boolean } = {};

  for (let i = 0; i < string.length; i++) {
    if (seen[string[i]]) {
      return false;
    } else {
      seen[string[i]] = true;
    }
  }
  return true;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  for (let i = 13; i < input.length; i++) {
    const result = runBackgroundCheck(input.slice(i - 13, i + 1));
    if (result) {
      return i + 1;
    }
  }
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
