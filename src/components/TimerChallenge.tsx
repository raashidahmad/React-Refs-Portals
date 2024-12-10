import { useRef, useState } from "react";
import { ResultModal } from "./ResultModal";

interface Timer {
    title: string
    targetTime: number
}
export const TimerChallenge = ({ title, targetTime }: Timer) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef<number | undefined>();
    const dialog = useRef<any>(undefined);

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const handleTimer = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((remaining) => remaining - 100);
        }, 100);
    }

    const stopTimer = () => {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const resetTargetTime = () => {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal 
                dialog={dialog} 
                targetTime={targetTime} 
                remainingTime={timeRemaining} 
                onReset={resetTargetTime}
            />
            <section id="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {timerIsActive ? <p>Started</p> : <p>Ended</p>}
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? stopTimer : handleTimer}>{timerIsActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Timer is running...' : 'Timer Inactive'}
                </p>
            </section>
        </>
    );
}