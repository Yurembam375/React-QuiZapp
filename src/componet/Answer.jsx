import { useRef } from "react";
export default function Answer({answer,answerState,selectedAnswer,onSelect}){
    const suffledAnswer = useRef();
    if (!suffledAnswer.current) {
        suffledAnswer.current = [...answer];
        suffledAnswer.current.sort(() => Math.random() - 0.5);
    }
    return(
        <ul id="answers">
        {suffledAnswer.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = '';
            if (answerState === 'answered' && isSelected) {
                cssClass = 'selected';
            }
            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                cssClass = answerState;
            }
            return (
                <li key={answer} className="answer">

                    <button className={cssClass} 
                    disabled={answerState!=''}
                    onClick={() => 
                        onSelect(answer)}>
                        {answer}</button>
                </li>
            )
        }

        )}
    </ul>
    )
}
