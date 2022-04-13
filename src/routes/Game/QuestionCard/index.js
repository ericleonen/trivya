import Container from '../../../commons/Container';

import './QuestionCard.css';

const QuestionCard = () => {
    return (
        <div className="QuestionCard">
            <Container color="#E0E0E0" height="220px" width="80%" centerContent>
                <p className="question title medium title-dark">What is the answer to this question?</p>
            </Container>
        </div>
    );
};

export default QuestionCard;