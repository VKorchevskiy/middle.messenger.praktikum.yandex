import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const USER_DATA = `<div class="wrapper user-data">
    {{> avatar Avatar}}
    <div class="user-data__items">{{#for userInfoItems UserInfoItem}}</div>
    <div class="form__actions">
      {{#for links Link}}
    </div>
  </div>
  `;

function UserData(props) {
  //   const { title, links, buttons, inputs } = props;
  return getRenderedTemplate(USER_DATA, props);
}

export default UserData;
