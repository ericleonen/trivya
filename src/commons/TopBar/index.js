import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark, faTrophy, faCoins } from '@fortawesome/free-solid-svg-icons';

const TopBar = ({ text, showProfile, showTrophies, showCoins, showBackArrow, showExitX }) => {
    return (
        <div className="TopBar">
            { 
                showBackArrow && 
                <button className="top-bar-btn">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button> 
            }
            { 
                showExitX && 
                <button className="top-bar-btn">
                    <FontAwesomeIcon icon={faXmark} />
                </button> 
            }
            <h2>{text}</h2>
            { 
                showTrophies && 
                <div className="top-bar-stat">
                    <FontAwesomeIcon icon={faTrophy} />
                    7,890
                </div> 
            }
            { 
                showCoins && 
                <div className="top-bar-stat">
                    <FontAwesomeIcon icon={faCoins} />
                    872
                </div> 
            }
        </div>
    );
};

export default TopBar;