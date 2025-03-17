const QuizCard = ({ quiz, onSelect }) => {
    return (
        <div onClick={() => onSelect(quiz)} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
        </div>
    );
};

export default QuizCard;
