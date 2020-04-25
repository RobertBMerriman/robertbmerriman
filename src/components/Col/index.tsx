import React, { ReactNode } from "react";
import "./index.scss";
import { cx } from "../utils";

interface Props {
  children: ReactNode;
  center?: boolean;
  right?: boolean;
  grow?: number;
}

const buildStyle = ({ grow }: Props): React.CSSProperties => {
  return grow ? { flexGrow: grow } : {};
};

export const Col = (props: Props) => {
  return (
    <div className={cx("col", props.center && "center", props.right && "right")} style={buildStyle(props)}>
      {props.children}
    </div>
  );
};
