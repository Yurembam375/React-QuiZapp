import quizCompleteImg from "../assets/quiz-complete.png";
import question from "../../question";
export default function Summary({ userAnswer }) {
    const skippedAnswer= userAnswer.filter((answer)=>answer===null);
    const correctAnswer = userAnswer.filter(
        (answer,index)=> answer === question[index].answers[0]
    );
const skippedAnswerShare= Math.round((skippedAnswer.length/userAnswer.length)*100);
const correctAnswerShare= Math.round((correctAnswer.length/userAnswer.length)*100);
const wrongAnswerShare =100- skippedAnswerShare - correctAnswerShare;
    return (
        <div id="summery">

            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>QuiZ completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswerShare}%</span>
                    <span className="text">skiped</span>
                </p>
                <p>
                    <span className="number">{correctAnswerShare}%</span>
                    <span className="text">answer correct</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerShare}%</span>
                    <span className="text">answer incorrect</span>
                </p>
            </div>
            <ol>
                {userAnswer.map((answer,index) => {
                    let cssClass= 'user-answer';
                    if(answer===null){
                        cssClass+=' skipped';
                    }else if(answer===question[index].answers[0]){
                        cssClass+=' correct';
                    }else{
                        cssClass+=' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className="question">{question[index].text}</p>
                            <p className={cssClass}>{answer?? 'skipped'}</p>
                        </li>
                    )
                })}

            </ol>
        </div>
    )
}