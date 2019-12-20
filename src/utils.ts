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

const format = (className: TemplateStringsArray, values: any[], props: any) => {
  const classes = [];
  className.forEach(c =>
    classes.push(
      ...c
        .split("\n")
        .map(c => c.trim())
        .filter(c => c.length > 0)
    )
  );
  const conditionals = values.map(value =>
    typeof value === "function" ? value(props) : value
  );
  return [...classes, ...conditionals].join(" ");
};

export const element = (type: string) => (
  className: TemplateStringsArray,
  ...values: any[]
) => createElement(type, className, values);
