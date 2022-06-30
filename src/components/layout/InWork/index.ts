import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { IInWork } from "./interface";

const IN_WORK = `<section class="in-work">
  <h1 class="text-xl in-work__title">Страница в работе</h1>
  <p class="text-lg in-work__description">Будет доступна после следующего спринта</p>
  <a class="text-xs in-work__link link" href="{{href}}">На разводную страницу</a>
</section>`;

function InWork(props: IInWork): string {
  return getRenderedTemplate(IN_WORK, props);
}

export default InWork;
