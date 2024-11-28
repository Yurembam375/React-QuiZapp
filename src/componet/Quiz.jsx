import { useCallback, useState } from "react"
import question from "../../question";

import Qusetion from "./Question";
import Summary from "./Summery";


export default function Quiz() {


    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex =  userAnswer.length ;
    const quiZcomplete = activeQuestionIndex === question.length;
    const handleSelectedAnswer = useCallback(
        function handleSelectedAnswer(selectedAns) {
           
            setUserAnswer((prevAnswer) => {
                return [...prevAnswer, selectedAns];
            }
            );

        }, []
    );
    if (quiZcomplete) {
        return (
        <Summary userAnswer={userAnswer}/>
        )
    }
    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswer(null)
    }, [handleSelectedAnswer]);


    return (
        <div id="quiz">
            <Qusetion
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectedAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>


    )
}

