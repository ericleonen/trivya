import TopBar from '../../commons/TopBar';
import Profile from './Profile';
import { getUsersRanked } from '../../firebase/user';
import { useEffect, useState } from 'react';
import AccessoryShelf from '../../commons/AccessoryShelf';

import './Ranks.css';

const Ranks = () => {
    const [usersRanked, setUsersRanked] = useState([]);

    useEffect(() => {
        (async () => {
            setUsersRanked(await getUsersRanked());
        })();   
    }, []);

    return (
        <div className="Ranks view">
            <TopBar text="Ranks" showBackArrow showTrophies/>
            <div className="profiles-list">
                {
                    usersRanked.map((profile, i) => {
                        return <Profile key={'profile_' + i}
                                        rank={i} 
                                        username={profile.name} 
                                        trophies={profile.trophies} 
                                        avatar={profile.inventory.Avatars}
                               />
                    })
                }
            </div>
            <AccessoryShelf />
        </div>
    );
};

export default Ranks;