import { useRef, useState } from "react";

export const Player = () => {
    const playerName = useRef<HTMLInputElement | null>(null);
    const [enteredPlayerName, setEnteredPlayerName] = useState<string | undefined>('');

    const handleClick = () => {
        setEnteredPlayerName(playerName?.current?.value);
    }

    return (
        <section id="player">
            <h2>Welcome {!enteredPlayerName ? 'Unknown entity' : enteredPlayerName}</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}