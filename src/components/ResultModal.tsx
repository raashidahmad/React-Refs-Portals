import { useImperativeHandle, useRef } from "react";

interface ModalResult {
    result: string
    targetTime: number,
    dialog: any
}

export const ResultModal = ({ dialog, result, targetTime }: ModalResult) => {
    const nativeDialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(dialog, () => {
        return {
            open() {
                nativeDialog?.current?.showModal();
            }
        }
    });
    return (<dialog ref={nativeDialog} className="result-modal">
        <h2>You {result}</h2>
        <p>
            The target time was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
            You stopped the timer before X seconds.
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    );
}