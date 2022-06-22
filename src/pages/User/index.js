import UserData from "../../components/layout/UserData";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  UserData({
    links: [
      { href: "../../index.html", className: "", children: "Назад" },
      {
        href: "./UserDataChange.html",
        className: "",
        children: "Изменить данные",
      },
      {
        href: "./PasswordChange.html",
        className: "",
        children: "Изменить пароль",
      },
      { href: "../../index.html", className: "", children: "Выйти" },
    ],
    userInfoItems: [
      {
        className: "",
        name: "Почта",
        value: "Почта",
      },
      {
        className: "",
        name: "Логин",
        value: "Логин",
      },
      {
        className: "",
        name: "Имя",
        value: "Имя",
      },
      {
        className: "",
        name: "Фамилия",
        value: "Фамилия",
      },
      {
        className: "",
        name: "Имя в чате",
        value: "Имя в чате",
      },
      {
        className: "",
        name: "Телефон",
        value: "Телефон",
      },
    ],
  })
);
