import { MdDownload } from "react-icons/md";
import { Hero } from "../../components/Hero";
import { BgMain } from "../../components/BgMain";

import "./styles.scss";

export const Home = () => {
  return (
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
  );
};
