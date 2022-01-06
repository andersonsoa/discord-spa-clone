import { HeroHeader } from "../HeroHeader";

import "./styles.scss";

interface HeroProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}

export const Hero = ({ children, backgroundColor = "#474feb" }: HeroProps) => {
  return (
    <div className="hero-container" style={{ background: backgroundColor }}>
      <HeroHeader />

      {children}
    </div>
  );
};
