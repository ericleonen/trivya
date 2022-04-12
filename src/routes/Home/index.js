import TopBar from '../../commons/TopBar';
import BigButton from './BigButton';

import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <TopBar showProfile showTrophies showCoins/>
            <h1 className="title large">Trivya</h1>
            <BigButton>Play</BigButton>
            <BigButton>Ranks</BigButton>
            <BigButton>Store</BigButton>
        </div>
    );
};

export default Home;