const fs = require('fs');
const path = require('path');
const tags = require('./tags.json');

const interfaceTags = [];
const tagMethods = [];

tags.forEach(tag => {
  // tagMethods.push(`static ${tag} = element('${tag}');`);
  interfaceTags.push(`${tag}: any;`);
  tagMethods.push(`classy['${tag}'] = element('${tag}');`);
});

const top = `import { element, clone } from "./utils";

type Clone = (
  elementToWrap: any
) => (
  className: any,
  ...values: any[]
) => (props: any) => React.FunctionComponentElement<{}>;

interface Static {
  ${interfaceTags.join('\n  ')}
}

type Classy = Clone & Static;

const classy = clone;
`;

const bottom = `

export default classy as Classy;`;

const final = `${top}${tagMethods.join('\n')}${bottom}`;

fs.writeFileSync(path.resolve(__dirname, '../src/classy.ts'), final);
