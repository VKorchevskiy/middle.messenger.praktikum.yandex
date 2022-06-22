import InWork from "../../components/layout/InWork/index";

const root = document.querySelector("#root");
root.insertAdjacentHTML(
  "afterbegin",
  InWork({
    href: "#",
  })
);
