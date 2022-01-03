import { Link } from "react-router-dom";
import { ReactComponent as DiscordLogo } from "../../assets/discord-logo.svg";

import "./styles.scss";

export const HeroHeader = () => {
  return (
    <div className="header-container">
      <header>
        <Link to="/">
          <DiscordLogo />
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </nav>

        <button>Abrir Discord</button>
      </header>
    </div>
  );
};
