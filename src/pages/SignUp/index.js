import Form from "../../components/layout/Form";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  Form({
    title: "Регистрация",
    links: [{ href: "#", className: "", children: "Войти" }],
    buttons: [
      { type: "button", className: "", children: "Зарегистрироваться" },
    ],
    inputs: [
      {
        style: "marginBottom: 16px",
        className: "",
        name: "email",
        labelText: "Почта",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "login",
        labelText: "Логин",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "first_name",
        labelText: "Имя",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "second_name",
        labelText: "Фамилия",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "phone",
        labelText: "Телефон",
        type: "text",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
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
