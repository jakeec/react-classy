import React from "react";

const createElement = (
  type: string,
  className: TemplateStringsArray,
  values: any[]
) => ({ children, ...restProps }) =>
  React.createElement(
    type,
    { className: format(className, values, restProps), ...restProps },
    children
  );

const format = (className: TemplateStringsArray, values: any[], props: any) =>
  values.reduce((prev, curr, i) => {
    const value = typeof curr === "function" ? curr(props) : curr;
    return prev + value + className[i + 1];
  }, className[0]);

export const element = (type: string) => (
  className: TemplateStringsArray,
  ...values: any[]
) => createElement(type, className, values);
