import InputArea from "../utils/InputArea";
import inputAreaRegisterData from "../utils/inputAreaRegisterData";

export default function InputAreas({ updateDetails }) {
    return inputAreaRegisterData.length % 2 !== 0
        ? InputAreasOddArrayLength({ updateDetails })
        : InputAreasEvenArrayLength({ updateDetails });
}

function InputAreasOddArrayLength({ updateDetails }) {
    return inputAreaRegisterData.map(
        (props, i) =>
            i % 2 === 0 && (
                <div
                    key={`input-panel-group__${i}-fields`}
                    className="modal__input-panel-group"
                >
                    <div
                        key={`input-panel__${i}-fields`}
                        className={`modal__input-panel ${
                            i + 1 === inputAreaRegisterData.length &&
                            "modal__input-panel--last"
                        }`}
                    >
                        <InputArea
                            {...props}
                            key={`input__${i}-fields`}
                            eventHandler={(e) =>
                                updateDetails(e, props.fieldName)
                            }
                        />
                    </div>
                    {i + 1 !== inputAreaRegisterData.length && (
                        <div
                            key={`input-panel__${i + 1}-fields`}
                            className="modal__input-panel"
                        >
                            <InputArea
                                {...inputAreaRegisterData[i + 1]}
                                key={`input__${i + 1}-fields`}
                                eventHandler={(e) =>
                                    updateDetails(
                                        e,
                                        inputAreaRegisterData[i + 1].fieldName
                                    )
                                }
                            />
                        </div>
                    )}
                </div>
            )
    );
}

function InputAreasEvenArrayLength({ updateDetails }) {
    return inputAreaRegisterData.map(
        (props, i) =>
            i % 2 === 0 && (
                <div
                    key={`input-panel-group__${i}-fields`}
                    className="modal__input-panel-group"
                >
                    <div
                        key={`input-panel__${i}-fields`}
                        className="modal__input-panel"
                    >
                        <InputArea
                            {...props}
                            key={`input__${i}-fields`}
                            eventHandler={(e) =>
                                updateDetails(e, props.fieldName)
                            }
                        />
                    </div>

                    <div
                        key={`input-panel__${i + 1}-fields`}
                        className="modal__input-panel"
                    >
                        <InputArea
                            key={`input__${i + 1}-fields`}
                            {...inputAreaRegisterData[i + 1]}
                            eventHandler={(e) =>
                                updateDetails(
                                    e,
                                    inputAreaRegisterData[i + 1].fieldName
                                )
                            }
                        />
                    </div>
                </div>
            )
    );
}
