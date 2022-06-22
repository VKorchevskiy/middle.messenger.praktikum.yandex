import Form from "../../components/layout/Form";

const root = document.querySelector("#root");

root.insertAdjacentHTML(
  "afterbegin",
  Form({
    title: "Изменить пароль",
    links: [{ href: "#", className: "", children: "Назад" }],
    buttons: [{ type: "button", className: "", children: "Сохранить" }],
    inputs: [
      {
        style: "marginBottom: 16px",
        className: "",
        name: "oldPassword",
        labelText: "Старый пароль",
        type: "password",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "newPassword",
        labelText: "Новый пароль",
        type: "password",
        errorText: "Ошибка",
      },
      {
        style: "marginBottom: 16px",
        className: "",
        name: "newPasswordToo",
        labelText: "Повторите новый пароль",
        type: "password",
        errorText: "Ошибка",
      },
    ],
  })
);
