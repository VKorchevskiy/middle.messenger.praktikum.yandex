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
    const [action, propsKey, component] = templateValue;
    switch (action) {
      case "#for": {
        // console.log(context[propsKey]);
        return map(context[propsKey], component);
      }
      case ">": {
        // console.log(context[propsKey], COMPONENTS[component]);
        // console.log(COMPONENTS[component](context[propsKey]));
        return COMPONENTS[component](context[propsKey]);
      }
      default:
        return "";
    }
  }
}

export default handlerTemplateValue;
