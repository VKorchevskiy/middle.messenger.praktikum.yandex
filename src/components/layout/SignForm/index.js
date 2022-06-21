import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const SIGN_FORM = `<form action="" class="sign-form">
  <p class="sign-form__title">{{title}}</p>
  {{#for inputs Input}}
</form>
`;

function SignForm(props) {
  //   const { title, inputs } = props;
  return getRenderedTemplate(SIGN_FORM, props);
}

export default SignForm;
