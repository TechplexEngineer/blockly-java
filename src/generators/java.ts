/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @file Instantiate a JavascriptGenerator and populate it with the
 * complete set of block generator functions for JavaScript.  This is
 * the entrypoint for javascript_compressed.js.
 */

// Former goog.module ID: Blockly.JavaScript.all

import { JavaGenerator } from './java/generator';
import * as colour from './java/colour';
import * as lists from './java/lists';
import * as logic from './java/logic';
import * as loops from './java/loops';
import * as math from './java/math';
import * as procedures from './java/procedures';
import * as text from './java/text';
import * as variables from './java/variables';
import * as variablesDynamic from './java/variables_dynamic';

export * from './java/generator';

/**
 * JavaScript code generator instance.
 * @type {!JavascriptGenerator}
 */
export const javaGenerator = new JavaGenerator();

// Install per-block-type generator functions:
const generators: typeof javaGenerator.forBlock = {
    ...colour,
    ...lists,
    ...logic,
    ...loops,
    ...math,
    ...procedures,
    ...text,
    ...variables,
    ...variablesDynamic,
};
for (const name in generators) {
    javaGenerator.forBlock[name] = generators[name];
}