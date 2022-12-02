import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

//  X is rock and is 1 points
//  Y is paper and is 2 points
//  Z is scissors and is 3 points

const rpcResult = (opponent: string, me: string) => {
  if (opponent === "A" && me === "Y") return 6;
  if (opponent === "B" && me === "Z") return 6;
  if (opponent === "C" && me === "X") return 6;
  if (opponent === "A" && me === "Z") return 0;
  if (opponent === "B" && me === "X") return 0;
  if (opponent === "C" && me === "Y") return 0;
  return 3;
};

const part1 = (rawInput: string) => {
  let acc = 0;
  const input = parseInput(rawInput);
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const [opponent, me] = line.split(" ");
    console.log(opponent, me);
    const playedValue = me === "X" ? 1 : me === "Y" ? 2 : 3;
    return (acc += rpcResult(opponent, me) + playedValue);
  }

  return acc;
};

//  X is lose and is 0 points
//  Y is draw and is 3 points
//  Z is win and is 6 points

const rpcValue = (opponent: string, result: string) => {
  if (opponent === "A" && result === "X") return 3;
  if (opponent === "B" && result === "X") return 1;
  if (opponent === "C" && result === "X") return 2;
  if (opponent === "A" && result === "Y") return 1;
  if (opponent === "B" && result === "Y") return 2;
  if (opponent === "C" && result === "Y") return 3;
  if (opponent === "A" && result === "Z") return 2;
  if (opponent === "B" && result === "Z") return 3;
  if (opponent === "C" && result === "Z") return 1;
};

const part2 = (rawInput: string) => {
  let acc = 0;
  const input = parseInput(rawInput);
  console.log(input.length);
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const [opponent, me] = line.split(" ");
    const resultValue = me === "X" ? 0 : me === "Y" ? 3 : 6;
    const result = rpcValue(opponent, me)! + resultValue;
    acc += result;
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
