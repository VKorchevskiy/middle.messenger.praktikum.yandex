import ErrorPage from "../components/layout/ErrorPage";
import Form from "../components/layout/Form";
import InWork from "../components/layout/InWork";
import UserData from "../components/layout/UserData";
import Avatar from "../components/uikit/Avatar";
import Button from "../components/uikit/Button";
import Input from "../components/uikit/Input";
import Link from "../components/uikit/Link";
import UserInfoItem from "../components/uikit/UserInfoItem";

const COMPONENTS: { [key: string]: (props: any) => string } = {
  Button,
  Input,
  ErrorPage,
  Form,
  Link,
  InWork,
  UserInfoItem,
  UserData,
  Avatar,
};

export default COMPONENTS;
