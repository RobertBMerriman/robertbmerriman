import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  children: ReactNode;
}

export const Row = (props: Props) => {
  return <div className="row">{props.children}</div>;
};
