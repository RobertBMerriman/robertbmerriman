import React, { useEffect } from "react";
import { LeafScene } from "./scene";
import "./sakura.css";

interface Props {
  leaves?: number;
  zIndex?: number;
}

const Sakura = ({ leaves = 40, zIndex }: Props) => {
  const className = "sakura";
  const uid = `${performance.now()}`;
  const id = `${className}-${uid.replace(".", "")}`;

  useEffect(() => {
    const leafContainer = document.querySelector(`#${id}`),
      leafScene = new LeafScene(leafContainer, leaves);

    leafScene.init();
    leafScene.render();
  });

  return <div className={className} id={id} style={{ zIndex }}></div>;
};

export default Sakura;
