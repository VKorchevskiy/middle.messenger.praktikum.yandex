import Input from "./components/uikit/Input/Input.hbs";
import { styles } from "./components/uikit/Input/styles.scss";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterbegin",
  Input({
    style: "margin-bottom: 16px",
    name: "qqq",
    labelText: "button_with-text",
    type: "text",
    errorText: "sgs",
  })
);
