import getValue from "./getValue";

import COMPONENTS from "./COMPONENTS";

function map<T>(contexts: T[], component: string) {
  return contexts.length !== 0
    ? contexts.map((item: any) => COMPONENTS[component](item)).join("")
    : "";
}

function getTemplateValue<T>(context: T, templateValue: string[]) {
  switch (templateValue[0]) {
    case "#for": {
      const [propsKey, componentName] = templateValue.slice(1);
      return map(getValue(context, propsKey), componentName);
    }
    case ">": {
      const [propsKey, componentName] = templateValue.slice(1);
      return COMPONENTS[componentName](getValue(context, propsKey));
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

function handlerTemplateValue<T>(context: T, templateValue: string[]) {
  return templateValue?.length === 1
    ? getValue(context, templateValue[0])
    : getTemplateValue(context, templateValue);
}

export default handlerTemplateValue;
