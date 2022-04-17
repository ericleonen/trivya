import TopBar from '../../commons/TopBar';
import BigButton from './BigButton';
import AccessoryShelf from '../../commons/AccessoryShelf';

import './Home.css';
import { faPlay, faListOl, faStore } from '@fortawesome/free-solid-svg-icons';

const Home = ({ user }) => {
    return (
        <div className="Home view">
            <TopBar showProfile user={user} showTrophies showCoins/>
            <h1 className="home-title title extra-large">Trivya</h1>
            <BigButton icon={faPlay} color="#92D35B" destination="game">Play</BigButton>
            <BigButton icon={faListOl} color="#629DE3" destination="ranks">Ranks</BigButton>
            <BigButton icon={faStore} color="#DBC55F" destination="store">Store</BigButton>
            <AccessoryShelf />
        </div>
    );
};

export default Home;