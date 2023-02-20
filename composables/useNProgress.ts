import type { NProgressOptions } from "nprogress";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export const useNProgress = () => {
  NProgress.configure({ showSpinner: false } as NProgressOptions);

  const start = () => {
    if (process.client) NProgress.start();
  };

  const done = () => {
    if (process.client) NProgress.done();
  };

  return {
    start,
    done,
  };
};
