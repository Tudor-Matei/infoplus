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
            ) : (
                <input {...inputProps} onInput={eventHandler} type={inputType} />
            )}
            <style jsx>{`
                input,
                select {
                    width: 100%;
                    height: 45px;
                    border-radius: 50px;
                    border: 1px solid var(--accent-primary);
                    outline: 0;
                    margin: 10px 0 20px;
                    padding-left: 10px;
                    color: var(--text-primary);
                    background-color: transparent;
                    position: relative;
                }

                input:invalid {
                    border-color: var(--background-quaternary);
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
