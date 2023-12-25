const assert = require("assert");
const { parseBuildResult } = require("../../../scripts/test-utils");
const { files } = parseBuildResult(__dirname);

const content = files["index.js"];

assert(!content.includes("src/dep/index.js"), `should skip middle files`);

assert(content.includes("dep.default"), `should change field name`);
