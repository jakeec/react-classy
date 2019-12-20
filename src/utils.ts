import React from "react";

const createElement = (type: string, className: TemplateStringsArray) => ({
  children,
  ...restProps
}) =>
  React.createElement(
    type,
    { className: format(className), ...restProps },
    children
  );

const format = (className: TemplateStringsArray) => className.join(" ").trim();

export const element = (type: string) => (className: TemplateStringsArray) =>
  createElement(type, className);
