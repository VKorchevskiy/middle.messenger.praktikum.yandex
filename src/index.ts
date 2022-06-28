import COMPONENTS from "./utils/COMPONENTS";

const root = document.querySelector("#root");

root?.insertAdjacentHTML(
  "afterbegin",
  COMPONENTS.Form({
    title: "Разводная страница для удобства",
    links: [
      { href: "/src/static/404.html", className: "", children: "404" },
      { href: "/src/static/500.html", className: "", children: "500" },
      { href: "/src/static/Messenger.html", className: "", children: "Чат" },
      {
        href: "/src/static/PasswordChange.html",
        className: "",
        children: "Изменение пароля",
      },
      {
        href: "/src/static/SignIn.html",
        className: "",
        children: "Вход",
      },
      {
        href: "/src/static/SignUp.html",
        className: "",
        children: "Регистрация",
      },
      {
        href: "/src/static/User.html",
        className: "",
        children: "Данные пользователя",
      },
      {
        href: "/src/static/UserDataChange.html",
        className: "",
        children: "Изменение данных пользователя",
      },
    ],
    buttons: [],
    inputs: [],
  })
);
