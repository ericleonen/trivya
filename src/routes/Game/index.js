import TopBar from '../../commons/TopBar';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import Button from '../../commons/Button';

import './Game.css';

const Game = () => {
    return (
        <div className="Game">
            <TopBar showExitX showTrophies showCoins/>
            <Timer />
            <QuestionCard />
            <div className="answer-choices">
                <Button>This is the answer</Button>
                <Button>No, it is this one</Button>
                <Button>Definitely this one</Button>
                <Button>I'm not it</Button>
            </div>
        </div>
    );
};

export default Game;