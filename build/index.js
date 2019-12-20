const fs = require("fs");
const path = require("path");
const tags = require("./tags.json");

const top = `import { element } from "./utils";

export default class classy {
  `;

const bottom = `
}`;

const tagMethods = [];

tags.forEach(tag => {
  tagMethods.push(`static ${tag} = element('${tag}');`);
});

const final = `${top}${tagMethods.join("\n  ")}${bottom}`;

fs.writeFileSync(path.resolve(__dirname, "../src/classy.ts"), final);
