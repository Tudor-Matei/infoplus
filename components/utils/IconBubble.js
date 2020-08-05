import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconBubble({
    icon,
    text = "",
    className = "",
    accent = "primary",
    onClick = null,
}) {
    return (
        <>
            <div
                className={`icon-bubble ${className} ${onClick && "icon-bubble--clickable"}`}
                onClick={onClick}
            >
                {text ? (
                    <p>{text}</p>
                ) : (
                    <FontAwesomeIcon
                        icon={icon}
                        style={{ height: "14px" }}
                        color={`var(--accent-${accent})`}
                    />
                )}
            </div>
            <style jsx>{`
                .icon-bubble {
                    border-radius: 50%;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 30px;
                    height: 30px;
                    background-color: var(--background-quaternary);
                }

                .icon-bubble--clickable {
                    cursor: pointer;
                    transition: 300ms linear;
                }

                .icon-bubble--clickable:hover {
                    background-color: var(--background-secondary);
                }
                p {
                    color: var(--text-button);
                }
            `}</style>
        </>
    );
}
