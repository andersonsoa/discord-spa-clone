import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaChevronDown } from "react-icons/fa";

import { ReactComponent as DiscordLogo } from "../../assets/discord-logo.svg";
import brazilFlag from "../../assets/brazil-flag.svg";

import "./styles.scss";

interface FooterListGroupProps {
  children: React.ReactNode;
  title: string;
}

const FooterListGroup = ({ children, title }: FooterListGroupProps) => (
  <div className="footer-list-group">
    <h5>{title}</h5>
    <ul>{children}</ul>
  </div>
);

const FooterListItem: React.FC = ({ children }) => <li className="footer-list-item">{children}</li>;

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-info">
            <h2>Imagine um lugar</h2>
            <div className="footer-info-language">
              <img src={brazilFlag} alt="brazil" /> <span>Portugues do Brasil</span> <FaChevronDown />
            </div>
            <div className="footer-info-social">
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
              <FaYoutube />
            </div>
          </div>

          <FooterListGroup title="Produto">
            <FooterListItem>Baixar</FooterListItem>
            <FooterListItem>Nitro</FooterListItem>
            <FooterListItem>Status</FooterListItem>
          </FooterListGroup>

          <FooterListGroup title="Empresa">
            <FooterListItem>Sobre</FooterListItem>
            <FooterListItem>Empregos</FooterListItem>
            <FooterListItem>Marca</FooterListItem>
            <FooterListItem>Sala de Imprensa</FooterListItem>
          </FooterListGroup>

          <FooterListGroup title="Recursos">
            <FooterListItem>Faculdade</FooterListItem>
            <FooterListItem>Suporte</FooterListItem>
            <FooterListItem>Segurança</FooterListItem>
            <FooterListItem>Blog</FooterListItem>
            <FooterListItem>Comentários</FooterListItem>
            <FooterListItem>Desenvolvedores</FooterListItem>
            <FooterListItem>StreamKit</FooterListItem>
          </FooterListGroup>

          <FooterListGroup title="Política">
            <FooterListItem>Termos</FooterListItem>
            <FooterListItem>Privacidade</FooterListItem>
            <FooterListItem>Configurações de cookies</FooterListItem>
            <FooterListItem>Diretrizes</FooterListItem>
            <FooterListItem>Reconhecimentos</FooterListItem>
            <FooterListItem>Licenças</FooterListItem>
            <FooterListItem>Moderação</FooterListItem>
          </FooterListGroup>
        </div>
        <div className="footer-action">
          <DiscordLogo />

          <button className="btn">Abrir o Discord</button>
        </div>
      </div>
    </footer>
  );
};
