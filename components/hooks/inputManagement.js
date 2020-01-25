import { useState } from "react";

export default function(state) {
  const [inputData, setInput] = useState(state);
  const inputsLength = Object.keys(state).length;

  const setInputEvent = (e, inputType) =>
    setInput(
      inputsLength === 1
        ? { [inputType]: e.currentTarget.value }
        : { ...inputData, [inputType]: e.currentTarget.value }
    );

  return [inputData, setInputEvent];
}
