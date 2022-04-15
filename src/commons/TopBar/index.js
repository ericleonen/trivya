import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { auth, getUserData } from '../../firebase/authentication';

import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark, faTrophy, faCoins } from '@fortawesome/free-solid-svg-icons';
import { userListener } from '../../firebase/user';

const TopBar = ({ text, showProfile, showTrophies, showCoins, showBackArrow, showExitX }) => {
    const navigate = useNavigate();
    
    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (user) {
            const unsubscribe = userListener(user.uid, setUserData)();
            return unsubscribe;
        }
    }, [user, setUserData]);

    return (
        <div className="TopBar">
            {
                showProfile &&
                <div className="top-bar-section">
                    <img 
                        src="https://i.pinimg.com/originals/36/60/58/366058cd421e6a981e50c6f800abbbd0.png" 
                        className="profile-img" 
                    />
                    <p className="top-bar-profile-username text">{userData?.name}</p>
                </div>
            }
            { 
                showBackArrow && 
                <div className="top-bar-section">
                    <button className="top-bar-btn" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} className="exit-icon icon" />
                    </button> 
                </div>
            }
            { 
                showExitX && 
                <div className="top-bar-section">
                    <button className="top-bar-btn" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faXmark} className="exit-icon icon" />
                    </button>
                </div> 
            }
            {
                text &&
                <div className="top-bar-section">
                    <h2 className="title medium">{text}</h2>
                </div>
            }
            <div className="top-bar-section top-bar-stats">
                { 
                    showTrophies && 
                    <div className="top-bar-stat">
                        <FontAwesomeIcon icon={faTrophy} className="trophy-icon icon" />
                        <span className="trophy-count text">{userData?.trophies}</span>
                    </div> 
                }
                { 
                    showCoins && 
                    <div className="top-bar-stat">
                        <FontAwesomeIcon icon={faCoins} className="coins-icon icon" />
                        <span className="coin-count text">{userData?.coins}</span>
                    </div> 
                }
            </div>
        </div>
    );
};

export default TopBar;