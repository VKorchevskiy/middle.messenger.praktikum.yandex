import getValue from "./getValue";

import COMPONENTS from "./COMPONENTS";

function _map(contexts, component) {
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
        return _map(getValue(context, propsKey), component);
      }
      case ">": {
        const [_, propsKey, component] = templateValue;
        // console.log(context[propsKey], COMPONENTS[component]);
        // console.log(COMPONENTS[component](context[propsKey]));
        return COMPONENTS[component](getValue(context, propsKey));
      }
      case "#if": {
        const [_, propsKey, ifTrue, ifFalse] = templateValue;
        return getValue(context, propsKey) ? ifTrue : ifFalse;
      }
      default:
        return "";
    }
  }
}

export default handlerTemplateValue;
