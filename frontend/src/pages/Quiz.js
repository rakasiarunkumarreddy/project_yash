import { useState, useEffect } from 'react';
import { fetchQuizzes, submitQuiz } from '../api';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const getQuizzes = async () => {
            const { data } = await fetchQuizzes();
            setQuizzes(data);
        };
        getQuizzes();
    }, []);

    const handleSubmit = async () => {
        const { data } = await submitQuiz({ quizId: selectedQuiz._id, answers });
        alert(`Your Score: ${data.score}`);
    };

    return (
        <div>
            {selectedQuiz ? (
                <div>
                    {selectedQuiz.questions.map((q, index) => (
                        <div key={index}>
                            <p>{q.text}</p>
                            {q.options.map((opt, i) => (
                                <button key={i} onClick={() => setAnswers([...answers, opt.text])}>
                                    {opt.text}
                                </button>
                            ))}
                        </div>
                    ))}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            ) : (
                quizzes.map((quiz) => (
                    <button key={quiz._id} onClick={() => setSelectedQuiz(quiz)}>
                        {quiz.title}
                    </button>
                ))
            )}
        </div>
    );
};

export default Quiz;
