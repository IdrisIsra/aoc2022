/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */

export function inputIntoGroups(input: string) {
  return input.split("\n\n").filter(Boolean);
}

// one entry per line in input file (empty lines are filtered out)
export function inputIntoLines(input: string) {
  return input.split("\n").filter(Boolean);
}

// one entry per line in input file (white spaces are trimmed and empty lines are removed & )
export function readExampleIntoLines(exampleStr: string) {
  return exampleStr
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export function readExampleIntoGroups(exampleStr: string) {
  return exampleStr
    .split(/\n\s*\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}
