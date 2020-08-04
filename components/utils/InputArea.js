export default function InputArea({
    title,
    subtitle = "",
    inputType = "text",
    isSelect = false,
    optionValues = [],
    eventHandler = null,
    inputProps = {},
}) {
    return (
        <>
            <h3>{title}</h3>
            {subtitle && <p>{subtitle}</p>}
            {isSelect ? (
                <select onInput={eventHandler}>
                    {optionValues.map((optionValue) => (
                        <option key={`optiune_${optionValue}`}>{optionValue}</option>
                    ))}
                </select>
            ) : inputType !== "multiline" ? (
                <input {...inputProps} onInput={eventHandler} type={inputType} />
            ) : (
                <textarea rows="30" cols="10" {...inputProps} onInput={eventHandler}></textarea>
            )}
            <style jsx>{`
                input,
                textarea,
                select {
                    width: 100%;
                    height: 45px;
                    border-radius: 50px;
                    border: 1px solid var(--background-quaternary);
                    outline: 0;
                    margin: 10px 0 20px;
                    padding-left: 10px;
                    color: var(--text-primary);
                    background-color: transparent;
                    position: relative;
                }

                input:valid,
                select:valid,
                textarea:valid {
                    border-color: var(--accent-primary);
                }

                textarea {
                    border-radius: 10px;
                    max-width: 100%;
                    min-width: 100%;
                    min-height: 105px;
                    padding-top: 10px;
                    background-color: var(--background-secondary);
                }

                option {
                    background-color: var(--background-primary);
                }

                h3 {
                    text-align: left;
                    text-transform: uppercase;
                    color: var(--text-primary);
                    font-size: var(--font-smaller);
                }

                p {
                    color: var(--text-primary);
                    max-width: 400px;
                }
            `}</style>
        </>
    );
}
