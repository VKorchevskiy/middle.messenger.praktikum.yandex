import Templator from "./Templator";

function getRenderedTemplate<T>(template: string, props: T) {
  const currentTemplate = new Templator(template);
  const renderedTemplate = currentTemplate.compile(props);
  return renderedTemplate;
}

export default getRenderedTemplate;
