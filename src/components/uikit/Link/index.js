import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const LINK = `<a
  href="{{href}}"
  class="link text-base {{className}}">
    {{children}}
  </a>`;

function Link(props) {
  // const { href, className, children } = props;
  return getRenderedTemplate(LINK, props);
}

export default Link;
