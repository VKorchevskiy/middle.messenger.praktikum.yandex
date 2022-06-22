import "./styles.scss";
import getRenderedTemplate from "../../../utils/getRenderedTemplate";

const INPUT = `<div 
  style="{{style}}" class="input {{className}}">
  <label class="input__label text-base" for="{{name}}">{{labelText}}</label>
  <input class="input__input {{#if errorText input__input_error }}" id="{{name}}" name="{{name}}" type="{{type}}" />
  <span class="input__error error-text {{#if errorText input__error_visible input__error_hidden }}">
    {{errorText}}
  </span>
</div>`;

function Input(props) {
  //   const { style, className, name, labelText, type, errorText } = props;
  return getRenderedTemplate(INPUT, props);
}

export default Input;
