import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const BUTTON = `<button
  type="{{type}}"
  class="button text-base {{className}}"
>{{children}}</button>`;

function Button(props) {
  //   const { description, title, href } = props;
  return getRenderedTemplate(BUTTON, props);
}

export default Button;
