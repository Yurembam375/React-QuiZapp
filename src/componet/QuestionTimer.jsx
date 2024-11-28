import { useEffect, useState } from "react"

export default function QuestionTimer({ timeOut, onTimeout ,mode}) {
    const [remaingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timmer = setTimeout(onTimeout, timeOut);
        return () => {
            clearTimeout(timmer);
        }

    }, [timeOut, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');
        setInterval(() => {

            setRemainingTime((prevRemaingTime) => prevRemaingTime - 100);
            return()=>{
                clearInterval(interval);
            }
        })
    }, []);
    return (
        <progress id="question-time" max={timeOut} value={remaingTime} className={mode} />
    )
}

