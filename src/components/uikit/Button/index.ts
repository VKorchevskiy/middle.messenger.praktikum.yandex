import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { IButton } from "./interface";

const BUTTON = `<button type="{{type}}" class="button text-base {{className}}">
    {{children}}
  </button>`;

function Button(props: IButton): string {
  return getRenderedTemplate(BUTTON, props);
}

export default Button;
