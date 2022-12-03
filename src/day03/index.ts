import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const getPriority = (str: string) => {
  const priority = str.charCodeAt(0);
  if (priority >= 97) {
    return priority - 96;
  }
  return priority - 38;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let totalPriority = 0;

  for (let i = 0; i < input.length; i++) {
    const line = input[i];

    const firstCompartment = line.slice(0, line.length / 2).split("");
    const secondCompartment = line.slice(line.length / 2);

    for (let j = 0; j < firstCompartment.length; j++) {
      if (secondCompartment.includes(firstCompartment[j])) {
        totalPriority += getPriority(firstCompartment[j]);
        break;
      }
    }
  }

  return totalPriority;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const groupedElves = [];
  let totalPriority = 0;

  for (let i = 0; i < input.length; i += 3) {
    groupedElves.push(input.slice(i, i + 3));
  }

  for (let i = 0; i < groupedElves.length; i++) {
    const [firstElf, secondElf, thirdElf] = groupedElves[i];

    for (let j = 0; j < firstElf.length; j++) {
      if (secondElf.includes(firstElf[j]) && thirdElf.includes(firstElf[j])) {
        totalPriority += getPriority(firstElf[j]);
        break;
      }
    }
  }

  return totalPriority;
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
