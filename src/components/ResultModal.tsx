import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalResult {
    targetTime: number,
    dialog: any,
    remainingTime: number
    onReset: () => void
}

export const ResultModal = ({ dialog, targetTime, remainingTime, onReset }: ModalResult) => {
    const nativeDialog = useRef<HTMLDialogElement | null>(null);
    const isLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(dialog, () => {
        return {
            open() {
                nativeDialog?.current?.showModal();
            }
        }
    });
    return (createPortal(<dialog ref={nativeDialog} onClose={onReset} className="result-modal">
        { isLost && <h2>You Lost</h2> }
        { !isLost && <h2>Your Score: {score}</h2> }
        <p>
            The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
            You stopped the timer before {formattedTime} seconds.
        </p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal') ?? document.body
    )
    );
}