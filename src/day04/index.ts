import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let acc = 0;

  for (let i = 0; i < input.length; i++) {
    const [firstPair, secondPair] = input[i].split(",");
    const [firstX, firstY] = firstPair.split("-").map(Number);
    const [secondX, secondY] = secondPair.split("-").map(Number);

    if (firstX <= secondX && firstY >= secondY) {
      acc++;
    } else if (firstX >= secondX && firstY <= secondY) {
      acc++;
    }
  }

  return acc;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let acc = 0;

  for (let i = 0; i < input.length; i++) {
    const [firstPair, secondPair] = input[i].split(",");
    const [firstX, firstY] = firstPair.split("-").map(Number);
    const [secondX, secondY] = secondPair.split("-").map(Number);

    if (firstY >= secondX && firstX <= secondY) acc++;
  }

  return acc;
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
