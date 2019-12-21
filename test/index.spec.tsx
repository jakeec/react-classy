import React from 'react';
import classy, { classy2 } from '../src';

const MyComponent = () => {
  return <div>Jake</div>;
};

const MyClassyComponent = classy2(MyComponent)`
    class1
    class2
`;

<MyClassyComponent>Jake</MyClassyComponent>;
<MyClassyComponent />;
