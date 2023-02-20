import jwt from "jsonwebtoken";
import { ErrorCode } from "~/utils/errorCode";
import { UserInfo } from "~/types";

export const TOKEN_KEY = "ARCO_NUXT_ADMIN_TOKEN";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let data = (await useStorage().getItem("db:user.json")) as UserInfo[];

  const user = data && data.find((u: any) => u.username === query.username);

  if (!user) {
    return { code: ErrorCode.NotUser, msg: "没有此用户！" };
  }

  const rightPwd = user.password === query.password;

  if (!rightPwd) {
    return { code: ErrorCode.PasswordError, msg: "密码错误！" };
  }

  Reflect.deleteProperty(user, "password");
  const token = jwt.sign(user, TOKEN_KEY);
  return {
    code: ErrorCode.OK,
    data: {
      user,
      token,
    },
    msg: "登录成功！",
  };
});
