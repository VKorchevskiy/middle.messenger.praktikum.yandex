import SignForm from "../../components/layout/Form";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  SignForm({
    title: "Вход",
    links: [{ href: "#", className: "", children: "Зарегистрироваться" }],
    buttons: [{ type: "button", className: "", children: "Войти" }],
    inputs: [
      {
        style: "",
        className: "",
        name: "login",
        labelText: "Логин",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "",
        className: "",
        name: "password",
        labelText: "Пароль",
        type: "password",
        errorText: "Ошибка",
      },
    ],
  })
);
