export default function InputArea({
    title,
    inputType = "text",
    isSelect = false,
    optionValues = [],
    eventHandler = null,
    inputProps = {},
}) {
    return (
        <>
            <h3>{title}</h3>
            {isSelect ? (
                <select onInput={eventHandler}>
                    {optionValues.map((optionValue) => (
                        <option key={`optiune_${optionValue}`}>
                            {optionValue}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    {...inputProps}
                    onKeyUp={eventHandler}
                    type={inputType}
                />
            )}
            <style jsx>{`
                input,
                select {
                    width: 100%;
                    height: 45px;
                    border-radius: 50px;
                    border: 1px solid var(--background-quaternary);
                    outline: 0;
                    padding-left: 10px;
                    color: var(--text-primary);
                    background-color: transparent;
                    position: relative;
                }

                input:invalid:focus {
                    border-color: var(--accent-quaternary);
                }

                option {
                    background-color: var(--background-primary);
                }

                h3 {
                    text-align: left;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    font-size: var(--font-smaller);
                }
            `}</style>
        </>
    );
}
