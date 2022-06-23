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

    const arrKeys = template.match(regExp);

    for (let i = 0; i < arrKeys.length; i++) {
      const templateValueWithPattern = arrKeys[i];
      const templateValue = arrKeys[i].slice(2, -2).trim().split(" ");
      const data = handlerTemplateValue(context, templateValue);
      template = template.replace(
        new RegExp(templateValueWithPattern, "gi"),
        data
      );
    }

    // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
    // while ((key = regExp.exec(template)) !== null) {
    //   console.log(key);
    //   if (key[1]) {
    //     const templateValue = key[1].trim().split(" ");
    //     const data = handlerTemplateValue(context, templateValue);
    //     console.log(data);
    //     console.log(template);
    //     template = template.replace(new RegExp(key[0], "gi"), data);
    //     console.log(template);
    //   }
    // }

    return template;
  };
}

export default Templator;
