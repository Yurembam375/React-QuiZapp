import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import question from "../../question";

export default function Qusetion({ key, answer, onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorect: null
    }
    );
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorect: null
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorect:question[key].answers[0]===answer,
            })
        },1000)
        let  answerState='';
        if(answer.selectedAnswer){
            answerState=answer.isCorect? 'correct':'wrong'
        }
    }
    return (
        <div id='question'>
            <QuestionTimer onTimeout={onSkipAnswer} timeOut={10000} />
            <h2>{question[key].text}</h2>
            <Answer

                answer={question[key].answers}
                answerState={answerState}
                selectedAnswer={answer.selectedAnswer}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}