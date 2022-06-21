import Templator from "./Templator";

function getRenderedTemplate(template, props) {
  const tmpl = new Templator(template);
  const renderedTemplate = tmpl.compile(props);
  return renderedTemplate;
}

export default getRenderedTemplate;
