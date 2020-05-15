import InputArea from "../utils/InputArea";

export default function InputAreas({ updateDetails, inputAreaData }) {
    return inputAreaData.length % 2 !== 0
        ? InputAreasOddArrayLength({ updateDetails, inputAreaData })
        : InputAreasEvenArrayLength({ updateDetails, inputAreaData });
}

function InputAreasOddArrayLength({ updateDetails, inputAreaData }) {
    return inputAreaData.map(
        (props, i) =>
            i % 2 === 0 && (
                <div key={`input-panel-group__${i}-fields`} className="modal__input-panel-group">
                    <div
                        key={`input-panel__${i}-fields`}
                        className={`modal__input-panel ${
                            i + 1 === inputAreaData.length ? "modal__input-panel--last" : ""
                        }`}
                    >
                        <InputArea
                            {...props}
                            key={`input__${i}-fields`}
                            eventHandler={(e) => updateDetails(e, props.fieldName)}
                        />
                    </div>
                    {i + 1 !== inputAreaData.length && (
                        <div key={`input-panel__${i + 1}-fields`} className="modal__input-panel">
                            <InputArea
                                {...inputAreaData[i + 1]}
                                key={`input__${i + 1}-fields`}
                                eventHandler={(e) =>
                                    updateDetails(e, inputAreaData[i + 1].fieldName)
                                }
                            />
                        </div>
                    )}
                </div>
            )
    );
}

function InputAreasEvenArrayLength({ updateDetails, inputAreaData }) {
    return inputAreaData.map(
        (props, i) =>
            i % 2 === 0 && (
                <div key={`input-panel-group__${i}-fields`} className="modal__input-panel-group">
                    <div key={`input-panel__${i}-fields`} className="modal__input-panel">
                        <InputArea
                            {...props}
                            key={`input__${i}-fields`}
                            eventHandler={(e) => updateDetails(e, props.fieldName)}
                        />
                    </div>

                    <div key={`input-panel__${i + 1}-fields`} className="modal__input-panel">
                        <InputArea
                            key={`input__${i + 1}-fields`}
                            {...inputAreaData[i + 1]}
                            eventHandler={(e) => updateDetails(e, inputAreaData[i + 1].fieldName)}
                        />
                    </div>
                </div>
            )
    );
}
