import Form from "../../components/layout/Form";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  Form({
    title: "Изменить данные профиля",
    links: [{ href: "#", className: "", children: "Назад" }],
    buttons: [{ type: "button", className: "", children: "Сохранить" }],
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
        name: "display_name",
        labelText: "Имя в чате",
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
    ],
  })
);
