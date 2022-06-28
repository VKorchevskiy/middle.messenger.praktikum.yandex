import { IAvatar } from "../../uikit/Avatar/interface";
import { ILink } from "../../uikit/Link/interface";
import { IUserInfoItem } from "../../uikit/UserInfoItem/interface";

export interface IUserData {
  avatar?: IAvatar;
  userInfoItems: IUserInfoItem[];
  links: ILink[];
}
