import React, { ReactNode } from "react";
import "./index.scss";
import { cx } from "../utils";

interface Props {
  children: ReactNode;
  className?: string;
  center?: boolean;
  break?: boolean;
}

export const Row = (props: Props) => {
  return <div className={cx("row", props.className, props.center && "center", props.break && "break")}>{props.children}</div>;
};
