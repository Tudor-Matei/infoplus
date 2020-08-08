import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useCallback } from "react";

export default function Accordion({ title, className = "", borderAccent = "primary", children }) {
    const [isOpen, setOpen] = useState(false);
    const accordionParent = useRef(null);

    const toggleAccordion = useCallback(() => {
        if (!isOpen)
            accordionParent.current.style.height = `${accordionParent.current.scrollHeight + 25}px`;
        else accordionParent.current.style.height = "50px";
        setOpen(!isOpen);
    }, [isOpen]);
    return (
        <>
            <div
                className={`accordion ${className} ${isOpen ? "accordion--open" : ""}`}
                onClick={toggleAccordion}
                ref={accordionParent}
            >
                <h3>{title}</h3>
                <div className="accordion__icon">
                    <FontAwesomeIcon icon="angle-down" color="var(--text-primary)" />
                </div>
                <div className="accordion__content">{children}</div>
            </div>
            <style jsx>{`
                .accordion {
                    padding: 10px 25px;
                    background-color: var(--background-secondary);
                    border: 2px solid;
                    overflow: hidden;
                    height: 50px;
                    border-radius: 50px;
                    transition: 300ms ease;
                    transition-property: background-color, box-shadow, transform, height,
                        border-radius, padding;
                    cursor: pointer;
                }

                .accordion__icon {
                    display: inline-block;
                    transition: transform 300ms ease;
                }

                .accordion--open .accordion__icon {
                    transform: rotateZ(180deg);
                }

                .accordion--open {
                    border-radius: 10px;
                    padding: 25px;
                }

                .accordion--open .accordion__content {
                    border-top-color: var(--background-tertiary);
                }

                h3 {
                    display: inline-block;
                    margin-right: 10px;
                    margin-bottom: 5px;
                }

                .accordion:not(.accordion--open):hover {
                    background-color: var(--background-tertiary);
                }

                .accordion:active {
                    transform: scale(0.98);
                }

                .accordion__content {
                    border-top: 2px solid transparent;
                    padding-top: 10px;
                }
            `}</style>
            <style jsx>{`
                .accordion {
                    /* prettier-ignore */
                    border-color: var(--accent-${borderAccent});
                }
            `}</style>
        </>
    );
}
