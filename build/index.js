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

const buildClassy = () => {
  const top = `import { element, clone } from "./utils";
import Classy from './types';

const classy = clone;
`;

  const bottom = `
  
export default classy as Classy;`;

  const final = `${top}${tagMethods.join('\n')}${bottom}`;

  fs.writeFileSync(path.resolve(__dirname, '../src/classy.ts'), final);
};

const buildTypes = () => {
  const types = `import React from 'react';

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
export default Classy;`;

  fs.writeFileSync(path.resolve(__dirname, '../src/types.ts'), types);
};

buildTypes();
buildClassy();
