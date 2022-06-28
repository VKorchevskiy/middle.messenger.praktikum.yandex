import getValue from "./getValue";

import COMPONENTS from "./COMPONENTS";

function _map(contexts: any[], component: string) {
  return contexts.length !== 0
    ? contexts.map((item) => COMPONENTS[component](item)).join("")
    : "";
}

function handlerTemplateValue(context: any, templateValue: string[]) {
  if (templateValue?.length === 1) {
    return getValue(context, templateValue[0]);
  } else {
    switch (templateValue[0]) {
      case "#for": {
        const [_, propsKey, component] = templateValue;
        return _map(getValue(context, propsKey), component);
      }
      case ">": {
        const [_, propsKey, component] = templateValue;
        return COMPONENTS[component](getValue(context, propsKey));
      }
      case "#if": {
        const [_, propsKey, ifTrue, ifFalse] = templateValue;
        return getValue(context, propsKey)
          ? getValue(context, propsKey, ifTrue)
          : getValue(context, propsKey, ifFalse);
      }
      default:
        return "";
    }
  }
}

export default handlerTemplateValue;
