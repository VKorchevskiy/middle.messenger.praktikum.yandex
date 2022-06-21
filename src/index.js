import Error from "./components/layout/ErrorPage/index";
import SignForm from "./components/layout/SignForm";
import Input from "./components/uikit/Input";
import COMPONENTS from "./utils/COMPONENTS";

const root = document.querySelector("#root");
const context = {
  description: "dfsfd",
  title: "Text 1",
  href: "#",
};

root.insertAdjacentHTML(
  "afterbegin",
  COMPONENTS.SignForm({
    title: "Авторизации",
    inputs: [1, 2, 3],
  })
);
