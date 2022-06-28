import { IButton } from "../../uikit/Button/interface";
import { IInput } from "../../uikit/Input/interface";
import { ILink } from "../../uikit/Link/interface";

export interface IForm {
  title: string;
  links: ILink[];
  buttons: IButton[];
  inputs: IInput[];
}
