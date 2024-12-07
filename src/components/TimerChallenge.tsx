import { useRef, useState } from "react";

interface Timer {
    title: string
    targetTime: number
}
export const TimerChallenge = ({ title, targetTime }: Timer) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef<number | undefined>();
    
    const handleTimer = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, (targetTime * 1000));
        setTimerStarted(true);
    }

    const stopTimer = () => {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <section id="challenge">
            <h2>{title}</h2>
            { timerExpired && <p>You lost</p> }
            <p className="challenge-time">
                { timerStarted ? <p>Started</p> : <p>Ended</p> }
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? stopTimer : handleTimer}>{ timerStarted ? 'Stop' : 'Start' } Challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                { timerStarted ? 'Timer is running...' : 'Timer Inactive' }
            </p>
        </section>
    );
}