import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const AVATAR = `<div class="avatar-change {{#if className className }}">
  <img class="avatar-change__image" />
   <a class="avatar-change__changed link text-base" >Поменять аватар</a>
</div>`;

function Avatar(props) {
  //   const { className, name, labelText, type, errorText } = props;
  return getRenderedTemplate(AVATAR, props);
}

export default Avatar;
