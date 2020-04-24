import React, { ReactNode } from "react";
import "./index.scss";

interface Props {
  children: ReactNode;
}

export const Card = (props: Props) => {
  return <div className="card">{props.children}</div>;
};
