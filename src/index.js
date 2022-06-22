import COMPONENTS from "./utils/COMPONENTS";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  COMPONENTS.UserData({
    links: [
      { href: "#", className: "", children: "Назад" },
      { href: "#", className: "", children: "Изменить данные" },
      { href: "#", className: "", children: "Изменить пароль" },
      { href: "#", className: "", children: "Выйти" },
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
