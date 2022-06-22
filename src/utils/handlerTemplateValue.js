import getValue from "./getValue";

import COMPONENTS from "./COMPONENTS";

function map(contexts, component) {
  return contexts.length !== 0
    ? contexts.map((item) => COMPONENTS[component](item)).join("")
    : "";
}

function handlerTemplateValue(context, templateValue) {
  if (templateValue?.length === 1) {
    // console.log(getValue(context, templateValue[0]));
    // console.log(context, templateValue[0]);
    return getValue(context, templateValue[0]);
  } else {
    switch (templateValue[0]) {
      case "#for": {
        const [_, propsKey, component] = templateValue;
        // console.log(context[propsKey]);
        return map(context[propsKey], component);
      }
      case ">": {
        const [_, propsKey, component] = templateValue;
        // console.log(context[propsKey], COMPONENTS[component]);
        // console.log(COMPONENTS[component](context[propsKey]));
        return COMPONENTS[component](context[propsKey]);
      }
      case "#if": {
        const [_, propsKey, ifTrue, ifFalse] = templateValue;
        return context[propsKey] ? ifTrue : ifFalse;
      }
      default:
        return "";
    }
  }
}

export default handlerTemplateValue;
