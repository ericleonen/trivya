import { useEffect, useState } from "react";
import Button from "../../../commons/Button";

const AnswerChoice = ({ children, chooseAnswer, choiceNum, showResults, isCorrect }) => {
    const [isChosen, setIsChosen] = useState(false);

    const getColor = () => {
        if (showResults) {
            if (isCorrect) {
                return '#92D35B';
            }
            else if (isChosen) {
                return '#D22B2B';
            }
        }
        return '#E0E0E0';
    };

    const choose = () => {
        chooseAnswer(choiceNum);
        setIsChosen(true);
    };

    useEffect(() => {
        if (!showResults) {
            setIsChosen(false);
        }
    }, [showResults]);

    return <Button 
                color={getColor()}
                darkText 
                func={choose}
                disabled={showResults}
            >
                {children}
            </Button>;
};

export default AnswerChoice;