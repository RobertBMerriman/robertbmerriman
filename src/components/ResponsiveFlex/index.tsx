import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  children: ReactNode;
}

export const ResponsiveFlex = (props: Props) => {
  return <div className="responsive-flex">{props.children}</div>;
};
