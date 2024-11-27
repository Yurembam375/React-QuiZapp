// import { useRef } from "react";
// export default function Answer({answer,answerState,selectedAnswer,onSelect}){
//     const suffledAnswer = useRef();
//     if (!suffledAnswer.current === undefined) {
//         suffledAnswer.current = [...answer];
//         suffledAnswer.current.sort(() => Math.random() - 0.5);
//     }
//     return(
//         <ul id="answers">
//         {suffledAnswer.map((answer) => {
//             const isSelected = selectedAnswer === answer;
//             let cssClass = '';
//             if (answerState === 'answer' && isSelected) {
//                 cssClass = 'selected';
//             }
//             if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
//                 cssClass = answerState;
//             }
//             return (
//                 <li key={answer} className="answer">
//                     <button className={cssClass} onClick={() => onSelect(answer)}>{answer}</button>
//                 </li>
//             )
//         }

//         )}
//     </ul>
//     )
// }
import { useRef, useEffect } from "react";

export default function Answer({ answer, answerState, selectedAnswer, onSelect }) {
    const shuffledAnswersRef = useRef(null);

    useEffect(() => {
        // Shuffle answers only once when the component is mounted
        if (!shuffledAnswersRef.current) {
            shuffledAnswersRef.current = [...answer].sort(() => Math.random() - 0.5);
        }
    }, [answer]);

    return (
        <ul id="answers">
            {shuffledAnswersRef.current &&
                shuffledAnswersRef.current.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    let cssClass = '';

                    if (answerState === 'answer' && isSelected) {
                        cssClass = 'selected';
                    }
                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                    }

                    return (
                        <li key={idx} className="answer">
                            <button
                                className={cssClass}
                                onClick={() => onSelect(option)}
                                disabled={answerState === 'correct' || answerState === 'wrong'} // Disable buttons after an answer is selected
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
}
