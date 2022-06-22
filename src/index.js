import COMPONENTS from "./utils/COMPONENTS";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  COMPONENTS.Form({
    title: "Изменить данные профиля",
    children: "fsdgvsdv",
    links: [{ href: "#", className: "", children: "Назад" }],
    buttons: [{ type: "button", className: "", children: "Сохранить" }],
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
        name: "display_name",
        labelText: "Имя в чате",
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
    ],
  })

  // COMPONENTS.Button({
  //   type: "button",
  //   className: "sfd",
  //   children: "Сохранить",
  // })
);
