import TopBar from '../../commons/TopBar';
import QuestionCard from './QuestionCard';
import Timer from './Timer';
import AnswerChoice from './AnswerChoice';
import { useState, useEffect } from 'react';
import he from 'he';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getUserData, rewardUser } from '../../firebase/user';
import { auth } from '../../firebase/authentication';

import './Game.css';
import GameOver from './GameOver';
import AccessoryShelf from '../../commons/AccessoryShelf';

const Game = () => {
    const [user, loading, error] = useAuthState(auth);
    const [question, setQuestion] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [timeUp, setTimeUp] = useState(false);
    const [userData, setUserData] = useState({});

    const getNewQuestion = () => {
        fetch('https://opentdb.com/api.php?amount=1&category=9&type=multiple')
            .then(res => res.json())
            .then(res => {
                const questionData = res.results[0];
                const correctChoice = Math.floor(Math.random() * 4);
                const answerChoices = questionData.incorrect_answers

                answerChoices.splice(correctChoice, 0, questionData.correct_answer);

                setQuestion({
                    question: questionData.question,
                    answerChoices,
                    correctChoice
                });

                setShowResults(false);
        });
    };

    const chooseAnswer = (i) => {
        setShowResults(true);

        if (question.correctChoice === i) {
            rewardUser(user.uid);
        }

        setTimeout(() => {
            getNewQuestion();
        }, 1000);
    };

    useEffect(() => {
        getNewQuestion();
        
        (async () => {
            setUserData(await getUserData(user.uid));
        })();
    }, []);

    const resetGame = () => {
        setShowResults(false);
        setTimeUp(false);
        getNewQuestion();
        
        (async () => {
            setUserData(await getUserData(user.uid));
        })();
    };

    return (
        <div className="Game view">
            <TopBar showExitX showTrophies showCoins />
            { timeUp ? <GameOver startUserData={userData} uid={user.uid} playAgain={resetGame} /> :
                <>
                    <Timer setTimeUp={setTimeUp} />
                    <QuestionCard>{Object.keys(question).length > 0 && he.decode(question.question)}</QuestionCard>
                    <div className="answer-choices">
                        { Object.keys(question).length > 0 && question.answerChoices.map((choice, i) => {
                            return <AnswerChoice 
                                        key={'answer_choice_' + i} 
                                        choiceNum={i}
                                        chooseAnswer={chooseAnswer}
                                        showResults={showResults}
                                        isCorrect={i === question.correctChoice}
                                    >
                                        {he.decode(choice)}
                                    </AnswerChoice>
                        }) }
                    </div>
                </>
            }
            <AccessoryShelf />
        </div>
    );
};

export default Game;