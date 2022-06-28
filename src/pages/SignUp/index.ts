import Form from "../../components/layout/Form";

const root = document.querySelector("#root");

root?.insertAdjacentHTML(
  "afterbegin",
  Form({
    title: "Регистрация",
    links: [{ href: "./SignIn.html", className: "", children: "Войти" }],
    buttons: [
      { type: "button", className: "", children: "Зарегистрироваться" },
    ],
    inputs: [
      {
        style: "",
        className: "",
        name: "email",
        labelText: "Почта",
        type: "text",
        errorText: "Ошибка",
      },
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
        name: "first_name",
        labelText: "Имя",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "",
        className: "",
        name: "second_name",
        labelText: "Фамилия",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "",
        className: "",
        name: "phone",
        labelText: "Телефон",
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
      {
        style: "",
        className: "",
        name: "password_too",
        labelText: "Пароль (ещё раз)",
        type: "password",
        errorText: "Ошибка",
      },
    ],
  })
);
