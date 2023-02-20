import type { FieldRule } from "@arco-design/web-vue";

export interface MenuItem {
  title: string;
  path: string;
  name: string;
  icon: string;
  children?: MenuItem[];
}

export interface FormColumn {
  field: string;
  label: string;
  subtitle?: string;
  rules?: FieldRule | FieldRule[];
}

export interface UserInfo {
  username: string;
  password?: string;
  auth?: string[];
}

export interface LogItem {
  username: string;
  type: string;
  api: string;
  name: string;
  data: any;
}

export interface Result<T = any> {
  code: number;
  data: T;
  msg?: string;
  err?: any;
}
