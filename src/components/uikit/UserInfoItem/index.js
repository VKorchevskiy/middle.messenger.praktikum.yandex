import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const USER_INFO_ITEM = `<div class="user-info-item {{#if className className }}">
  <p class="user-info-item__name text-base">{{name}}</p>
  <p class="user-info-item__value text-base">{{value}}</p>
</div>`;

function UserInfoItem(props) {
  //   const { className, name, value } = props;
  return getRenderedTemplate(USER_INFO_ITEM, props);
}

export default UserInfoItem;
