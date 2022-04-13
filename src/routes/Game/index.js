import TopBar from '../../commons/TopBar';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import Button from '../../commons/Button';

import './Game.css';

const Game = () => {
    return (
        <div className="Game view">
            <TopBar showExitX showTrophies showCoins/>
            <Timer />
            <QuestionCard />
            <div className="answer-choices">
                <Button color="#E0E0E0" darkText>This is the answer</Button>
                <Button color="#E0E0E0" darkText>No, it is this one</Button>
                <Button color="#E0E0E0" darkText>Definitely this one</Button>
                <Button color="#E0E0E0" darkText>I'm not it</Button>
            </div>
        </div>
    );
};

export default Game;