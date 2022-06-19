import Error from "./components/layout/Error/Error.hbs";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterbegin",
  Error({
    title: 500,
    description: "Что-то пошло не так",
    href: "#",
  })
);
