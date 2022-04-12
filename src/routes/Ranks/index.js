import TopBar from '../../commons/TopBar';
import Profile from './Profile';

import './Ranks.css';

const Ranks = () => {
    return (
        <div className="Ranks">
             <TopBar text="Ranks" showBackArrow showTrophies/>
            <div className="profiles-list">
                <Profile />
            </div>
        </div>
    );
};

export default Ranks;