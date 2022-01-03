import { HeroHeader } from "../HeroHeader";

import "./styles.scss";

interface HeroProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundComponent?: React.ReactNode;
}

export const Hero = ({ children, backgroundComponent, backgroundColor = "#474feb" }: HeroProps) => {
  return (
    <div className="hero-container" style={{ background: backgroundColor }}>
      <HeroHeader />

      <div className="hero-body">{children}</div>

      {backgroundComponent && <div className="hero-background-image">{backgroundComponent}</div>}
    </div>
  );
};
