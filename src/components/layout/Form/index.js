import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const FORM = `<form class="wrapper form">
    <p class="form__title">
      {{title}}
    </p>
    <div class="form__inputs">
      {{#for inputs Input}}
    </div>
    <div class="form__actions">
      {{#for buttons Button}}
      {{#for links Link}}
    </div>
  </form>
  `;

function Form(props) {
  //   const { title, links, buttons, inputs } = props;
  return getRenderedTemplate(FORM, props);
}

export default Form;
