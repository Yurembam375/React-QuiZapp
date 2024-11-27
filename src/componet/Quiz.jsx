import { useCallback, useState } from "react"
import question from "../../question";
import quizCompleteImg from "../assets/quiz-complete.png";
import Qusetion from "./Question";


export default function Quiz() {

    const [answerState, setAnswerState] = useState('');
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;

    const quiZcomplete = activeQuestionIndex === question.length;
    const handleSelectedAnswer = useCallback(
        function handleSelectedAnswer(selectedAns) {
            setAnswerState('answer');
            setUserAnswer((prevAnswer) => {
                return [...prevAnswer, selectedAns];
            }
            );
            setTimeout(() => {
                if (selectedAns === question[activeQuestionIndex].answers[0]) {
                    setAnswerState('correct');
                } else {
                    setAnswerState('wrong');
                    setTimeout(() => {
                        setAnswerState('');
                    }, 2000)
                }
            }, 1000);

        }, [activeQuestionIndex]
    );
    if (quiZcomplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>QuiZ completed!</h2>
            </div>
        )
    }
    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswer(null)
    }, [handleSelectedAnswer]);


    return (
        <div id="quiz">

            <Qusetion
                key={activeQuestionIndex}
                answer={question[activeQuestionIndex].answers}

                onSkipAnswer={handleSkipAnswer}
            />
        </div>


    )
}

