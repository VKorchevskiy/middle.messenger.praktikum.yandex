import ErrorPage from "../../components/layout/ErrorPage/index";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterbegin",
  ErrorPage({
    title: 404,
    description: "Не найдено",
    href: "./Messenger.html",
  })
);
