import React from "react";
import { cx } from "../utils";

interface Props {
  src: string;
  alt: string;
  className: string;
}

export const Img = (props: Props) => {
  return <div className={cx("img", props.className)}></div>;
};
