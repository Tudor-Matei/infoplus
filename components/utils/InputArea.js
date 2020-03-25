export default function InputArea({
    title,
    inputType,
    isSelect = false,
    optionValues = []
}) {
    return (
        <>
            <h3>{title}</h3>
            {isSelect ? (
                <select>
                    {optionValues.map((optionValue, i) => (
                        <option key={`optiune_${i}`}>{optionValue}</option>
                    ))}
                </select>
            ) : (
                <input type={inputType} />
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
