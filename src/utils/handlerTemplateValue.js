import COMPONENTS from "./COMPONENTS";
import getValue from "./getValue";

function handlerTemplateValue(context, templateValue) {
  console.log(templateValue, context, context[templateValue[1]]);
  if (templateValue.length === 1) {
    return getValue(context, templateValue[0]);
  } else {
    switch (templateValue[0]) {
      case "#for":
        return context[templateValue[1]]
          .map((item) => COMPONENTS[templateValue[2]](item))
          .join("");
      default:
        return "";
    }
  }
}

export default handlerTemplateValue;
