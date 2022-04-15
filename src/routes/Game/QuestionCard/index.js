import Container from '../../../commons/Container';

import './QuestionCard.css';

const QuestionCard = ({ children }) => {
    return (
        <div className="QuestionCard">
            <Container color="#E0E0E0" height="220px" width="80%" centerContent>
                <p className="question title medium title-dark">{children}</p>
            </Container>
        </div>
    );
};

export default QuestionCard;