import Templator from "./Templator";

function getRenderedTemplate(template, props) {
  const currentTemplate = new Templator(template);
  const renderedTemplate = currentTemplate.compile(props);
  return renderedTemplate;
}

export default getRenderedTemplate;
