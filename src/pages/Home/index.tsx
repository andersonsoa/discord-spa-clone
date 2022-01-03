import { MdDownload } from "react-icons/md";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { BgMain } from "../../components/BgMain";

import featuredOne from "../../assets/featured-1.svg";
import featuredTwo from "../../assets/featured-2.svg";

import "./styles.scss";

export const Home = () => {
  return (
    <>
      <Hero backgroundComponent={<BgMain />}>
        <div className="container">
          <div className="text-container">
            <h1>IMAGINE UM LUGAR…</h1>
            <p>
              …onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns
              amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.
            </p>
          </div>
          <div className="action-container">
            <button className="btn download">
              <MdDownload size={24} />
              Baixar para Windows
            </button>
            <button className="btn open">Abra o Discord no seu navegador</button>
          </div>
        </div>
      </Hero>

      <Section>
        <div className="section-image">
          <img src={featuredOne} alt="featured-1" />
        </div>

        <div className="section-text">
          <h2>Crie um espaço controlado por convite onde você se sinta em casa</h2>
          <p>
            Os servidores Discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplesmente falarem do
            dia sem entupir um chat geral.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-text">
          <h2>Aqui é fácil se encontrar</h2>
          <p>
            Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer
            a chamada.
          </p>
        </div>

        <div className="section-image">
          <img src={featuredTwo} alt="featured-2" />
        </div>
      </Section>

      <Section>
        <div className="section-image">
          <img src={featuredTwo} alt="featured-3" />
        </div>

        <div className="section-text">
          <h2>Para poucos e para muitos</h2>
          <p>
            Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros,
            monte canais privados e muito mais.
          </p>
        </div>
      </Section>
    </>
  );
};
