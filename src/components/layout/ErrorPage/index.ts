import "./styles.scss";

import getRenderedTemplate from "../../../utils/getRenderedTemplate";

import { IErrorPage } from "./interface";

const ERROR_PAGE = `<section class="error-page">
  <h1 class="text-xl error-page__title">{{title}}</h1>
  <p class="text-lg error-page__description">{{description}}</p>
  <a class="text-xs error-page__link link" href="{{href}}">Назад к чатам</a>
</section>`;

function ErrorPage(props: IErrorPage): string {
  return getRenderedTemplate(ERROR_PAGE, props);
}

export default ErrorPage;
