import { ErrorCode } from "~~/constants/errorCode";

export default defineEventHandler(async () => {
  let data = await useStorage().getItem("db:user.json");

  return {
    code: ErrorCode.OK,
    data: data || [],
  };
});
