import getValue from "./getValue";

import COMPONENTS from "./COMPONENTS";

function map(contexts: any[], component: string) {
  return contexts.length !== 0
    ? contexts.map((item: any) => COMPONENTS[component](item)).join("")
    : "";
}

function getTemplateValue(context: any, templateValue: string[]) {
  switch (templateValue[0]) {
    case "#for": {
      const [propsKey, component] = templateValue.slice(1);
      return map(getValue(context, propsKey), component);
    }
    case ">": {
      const [propsKey, component] = templateValue.slice(1);
      return COMPONENTS[component](getValue(context, propsKey));
    }
    case "#if": {
      const [propsKey, ifTrue, ifFalse] = templateValue.slice(1);
      return getValue(context, propsKey)
        ? getValue(context, propsKey, ifTrue)
        : getValue(context, propsKey, ifFalse);
    }
    default:
      return "";
  }
}

function handlerTemplateValue(context: any, templateValue: string[]) {
  return templateValue?.length === 1
    ? getValue(context, templateValue[0])
    : getTemplateValue(context, templateValue);
}

export default handlerTemplateValue;
