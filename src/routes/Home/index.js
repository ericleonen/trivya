import TopBar from '../../commons/TopBar';
import BigButton from './BigButton';

import './Home.css';
import { faPlay, faListOl, faStore } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="Home view">
            <TopBar showProfile showTrophies showCoins/>
            <h1 className="home-title title extra-large">Trivya</h1>
            <BigButton icon={faPlay} color="#92D35B">Play</BigButton>
            <BigButton icon={faListOl} color="#629DE3">Ranks</BigButton>
            <BigButton icon={faStore} color="#DBC55F">Store</BigButton>
        </div>
    );
};

export default Home;