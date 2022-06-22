import ErrorPage from "../../components/layout/ErrorPage/index";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterbegin",
  ErrorPage({
    title: 500,
    description: "Что-то пошло не так",
    href: "./Messenger.html",
  })
);
