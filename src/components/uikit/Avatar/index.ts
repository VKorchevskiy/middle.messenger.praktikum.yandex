import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { IAvatar } from "./interface";

const AVATAR: string = `<div class="avatar-change {{#if className className }}">
  <img class="avatar-change__image" />
   <a class="avatar-change__changed link text-base" >Поменять аватар</a>
</div>`;

function Avatar(props: IAvatar) {
  return getRenderedTemplate(AVATAR, props);
}

export default Avatar;
