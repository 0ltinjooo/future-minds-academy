import { useState } from 'react';
import QUESTIONS from '../assets/js/questions';
import quizCompleteScrene from '../assets/quiz-complete.png';
import QuizTimer from './QuizTimer';

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    function handleAnswer(selectedAnswer) {
        setUserAnswers(
            (previusAnswer) => {
                return [...previusAnswer, selectedAnswer];
            }

        );
    }


    if (isQuizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteScrene} alt="Quiz Completed" />
                <h2>Quiz Complete</h2>
            </div>
        );
    }

        const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers.sort((a, b) => Math.random() - 0.5)];

    return (
        <>
            <main>
                <div id="quiz">
                    <div id="question">
                        <QuizTimer />
                        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                        <ul id="answers">
                            {
                                shuffleAnswers.map((answer) =>
                                    <li key={answer} className="answer">
                                        <button onClick={() => handleAnswer(answer)}>{answer}</button>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}