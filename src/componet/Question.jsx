import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import question from "../../question";

export default function Qusetion({ index, onSkipAnswer, onSelectAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorect: null
    }
    );
    let timmer = 10000;
    if (answer.selectedAnswer) {
        timmer = 1000;
    }
    if (answer.isCorect !== null) {
        timmer = 2000;
    }
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorect: null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorect: question[index].answers[0] === answer,
            })
            setTimeout(() => {
                onSelectAnswer(answer);

            }, 2000);
        }, 1000)

    }
    let answerState = '';
    if (answer.selectedAnswer && answer.isCorect != null) {
        answerState = answer.isCorect ? 'correct' : 'wrong'
    }
    return (
        <div id='question'>
            <QuestionTimer onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} timeOut={timmer} mode={answerState} key={timmer} />
            <h2>{question[index].text}</h2>
            <Answer
                answer={question[index].answers}
                answerState={answerState}
                selectedAnswer={answer.selectedAnswer}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}