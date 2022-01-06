import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
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
          <a href="https://github.com/andersonsoa/discord-spa-clone" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
            Código Fonte
          </a>
        </nav>

        <button>Abrir Discord</button>
      </header>
    </div>
  );
};
