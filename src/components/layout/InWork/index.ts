import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { IInWork } from "./interface";

const IN_WORK = `<section class="in_work">
  <h1 class="text-xl in_work__title">Страница в работе</h1>
  <p class="text-lg in_work__description">Будет доступна после следующего спринта</p>
  <a class="text-xs in_work__link link" href="{{href}}">На разводную страницу</a>
</section>`;

function InWork(props: IInWork) {
  return getRenderedTemplate(IN_WORK, props);
}

export default InWork;
