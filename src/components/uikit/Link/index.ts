import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { ILink } from "./interface";

const LINK = `<a href="{{href}}" class="link text-base {{className}}">
    {{children}}
  </a>`;

function Link(props: ILink): string {
  return getRenderedTemplate(LINK, props);
}

export default Link;
