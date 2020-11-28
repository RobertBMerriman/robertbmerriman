import React, { ReactNode } from "react";
import "./index.scss";
import { cx } from "../utils";

interface Props {
  children: ReactNode;
  center?: boolean;
  vCenter?: boolean;
  right?: boolean;
  grow?: number;
  basis?: string;
}

const buildStyle = ({ grow, basis }: Props): React.CSSProperties => {
  return {
    flexGrow: grow,
    flexBasis: grow ? '0%' : undefined
  }
};

export const Col = (props: Props) => {
  return (
    <div className={cx("col", props.center && "center", props.vCenter && "v-center", props.right && "right")} style={buildStyle(props)}>
      {props.children}
    </div>
  );
};
