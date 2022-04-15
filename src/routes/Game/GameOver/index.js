import { useEffect, useState } from "react";
import { getUserData, updateHighScore } from "../../../firebase/user";
import  Button from '../../../commons/Button';

import './GameOver.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faTrophy } from "@fortawesome/free-solid-svg-icons";

const GameOver = ({ startUserData, uid, playAgain }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        (async () => {
            setUserData(await getUserData(uid));
        })();
    }, []);

    const createSubTitle = () => {
        const score = userData.trophies - startUserData.trophies;

        if (score > 0 && score > userData.highScore) {
            updateHighScore(uid, score);
            return 'New highscore!';
        }
        else if (score > 5) {
            return 'Amazing job!';
        }
        else if (score > 2) {
            return 'Nice work!';
        }
        else {
            return 'Better luck next time!';
        }
    };

    return (
        <div className="GameOver">
            <h2 className="game-over-tile title extra-large">Time's Up!</h2>
            <h3 className="game-over-sub-title title medium">{ createSubTitle() }</h3>
            <div className="game-over-stat">
                <FontAwesomeIcon icon={faTrophy} className="trophy-icon icon" />
                <p className="text">+{userData.trophies - startUserData.trophies}</p>
            </div>
            <div className="game-over-stat">
                <FontAwesomeIcon icon={faCoins} className="coins-icon icon" />
                <p className="text">+{userData.coins - startUserData.coins}</p>
            </div>
            <Button 
                color="#92D35B" 
                darkText 
                func={playAgain}
            >
                Play again
            </Button>
        </div>
    );
};

export default GameOver;