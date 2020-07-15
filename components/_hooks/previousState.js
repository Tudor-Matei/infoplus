import { useRef, useEffect } from "react";

export default function usePreviousState(currentState) {
    const ref = useRef();
    useEffect(() => {
        ref.current = currentState;
    });

    return ref.current;
}
