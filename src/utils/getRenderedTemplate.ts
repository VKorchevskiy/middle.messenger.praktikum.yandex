import Templator from "./Templator";

function getRenderedTemplate(template: string, props: any) {
  const currentTemplate = new Templator(template);
  const renderedTemplate = currentTemplate.compile(props);
  return renderedTemplate;
}

export default getRenderedTemplate;
