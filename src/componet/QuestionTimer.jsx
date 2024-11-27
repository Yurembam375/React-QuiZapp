import { useEffect, useState } from "react"

export default function QuestionTimer({ timeOut, onTimeout }) {
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
        <progress id="question-time" max={timeOut} value={remaingTime} />
    )
}

// import { useEffect, useState } from "react";

// export default function QuestionTimer({ timeOut, onTimeout }) {
//   const [remainingTime, setRemainingTime] = useState(timeOut);

//   useEffect(() => {
//     // Set up the interval to decrement remainingTime
//     const interval = setInterval(() => {
//       setRemainingTime((prevTime) => {
//         if (prevTime <= 100) {
//           clearInterval(interval); // Stop the interval when time reaches 0
//           onTimeout(); // Call onTimeout when timer expires
//           return 0;
//         }
//         return prevTime - 100;
//       });
//     }, 100);

//     // Cleanup the interval
//     return () => clearInterval(interval);
//   }, [timeOut, onTimeout]);

//   useEffect(() => {
//     // Reset the remaining time when timeOut changes
//     setRemainingTime(timeOut);
//   }, [timeOut]);

//   return (
//     <progress
//       id="question-time"
//       max={timeOut}
//       value={remainingTime}
//       style={{ width: "100%" }}
//     />
//   );
// }
