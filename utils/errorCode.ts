export enum ErrorCode {
  OK = 1000,
  NotUser = 1001,
  PasswordError = 1002,
  UserOrPwdError = 1003,
  ExistedUser = 1004,

  // 游戏服务端接口错误
  InvalidServerUrl = 1110,
  GameServerError = 1111,
}
