import handlerTemplateValue from "./handlerTemplateValue";

class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

  constructor(template) {
    this._template = template;
  }

  compile(context) {
    return this._compileTemplate(context);
  }

  _compileTemplate = (context) => {
    let template = this._template;
    let key = null;
    const regExp = this.TEMPLATE_REGEXP;

    // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
    while ((key = regExp.exec(template))) {
      // if (key[1]) {
      const templateValue = key[1].trim().split(" ");
      const data = handlerTemplateValue(context, templateValue);
      // console.log(data);
      // console.log(template);
      template = template.replace(new RegExp(key[0], "gi"), data);
      // console.log(template);
      // }
    }

    return template;
  };
}

export default Templator;
