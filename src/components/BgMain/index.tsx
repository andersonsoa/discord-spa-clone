import { ReactComponent as ForegroundLeft } from "../../assets/foreground-left.svg";
import { ReactComponent as ForegroundRight } from "../../assets/foreground-right.svg";
import { ReactComponent as ForegroundClouds } from "../../assets/clouds.svg";

import "./styles.scss";

export const BgMain = () => {
  return (
    <>
      <ForegroundLeft className="left" />
      <ForegroundRight className="right" />
      <ForegroundClouds className="background" />
    </>
  );
};
