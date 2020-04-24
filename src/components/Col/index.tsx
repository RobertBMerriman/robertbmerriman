import React, { ReactNode } from "react";
import "./index.scss";
import { cx } from "../utils";

interface Props {
  children: ReactNode;
  center?: boolean;
}

export const Col = (props: Props) => {
  return <div className={cx("col", props.center && "center")}>{props.children}</div>;
};
