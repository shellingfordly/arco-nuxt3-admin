import JSON5 from "json5";
import { useAppStore } from "~/store/app";

export enum StrType {
  JsonType,
  LineType,
  MixType,
  TextType,
  MultiLineType,
}

let JSONFormatter: any;

async function initJSONFormatter() {
  if (process.client) {
    const pack = await import("json-formatter-js");
    JSONFormatter = pack.default || pack;
  }
}

export function useJSonFormatter() {
  initJSONFormatter();

  const createFormatter = (str: string) => {
    const appStore = useAppStore();
    const formatter = new JSONFormatter(JSON5.parse(str), 1, {
      theme: appStore.isDark ? "dark" : "",
    });
    return formatter;
  };

  return { createFormatter };
}
