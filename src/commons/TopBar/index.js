import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark, faTrophy, faCoins } from '@fortawesome/free-solid-svg-icons';

const TopBar = ({ text, showProfile, showTrophies, showCoins, showBackArrow, showExitX }) => {
    return (
        <div className="TopBar">
            {
                showProfile &&
                <div className="top-bar-section">
                    <img 
                        src="https://i.pinimg.com/originals/36/60/58/366058cd421e6a981e50c6f800abbbd0.png" 
                        className="profile-img" 
                    />
                    <p className="profile-username text">Batman</p>
                </div>
            }
            { 
                showBackArrow && 
                <div className="top-bar-section">
                    <button className="top-bar-btn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button> 
                </div>
            }
            { 
                showExitX && 
                <div className="top-bar-section">
                    <button className="top-bar-btn">
                        <FontAwesomeIcon icon={faXmark} />
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
                        <span className="trophy-count text">7,890</span>
                    </div> 
                }
                { 
                    showCoins && 
                    <div className="top-bar-stat">
                        <FontAwesomeIcon icon={faCoins} className="coins-icon icon" />
                        <span className="coin-count text">872</span>
                    </div> 
                }
            </div>
        </div>
    );
};

export default TopBar;