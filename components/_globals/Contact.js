import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <section className="contact">
            <h1 className="contact__heading">
                Vrei să intri în contact cu noi?
            </h1>
            <ContactPanel title="e-mail" icon="envelope">
                <p>samplemail@example.com</p>
                <p>samplemail@example.com</p>
                <p>samplemail@example.com</p>
            </ContactPanel>
            <ContactPanel title="telefon" icon="phone">
                <p>+070xxx00000xxx0000</p>
                <p>+070xxx00000xxx0000</p>
                <p>+070xxx00000xxx0000</p>
            </ContactPanel>

            <style jsx>{`
                .contact {
                    width: 100%;
                    padding: 100px 0;
                    background-color: var(--contact);
                    color: var(--text-secondary);
                    transition: color, background-color 300ms ease;
                    text-align: center;
                }

                .contact__heading {
                    margin: 0 10px 50px;
                }

                @media screen and (max-width: 825px) {
                    .contact__heading {
                        font-size: var(--font-medium);
                    }
                }
            `}</style>
        </section>
    );
}

function ContactPanel({ title, icon, children }) {
    return (
        <div className="contact__contact-panel">
            <div className="contact__panel-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="contact__panel-heading">{title.toUpperCase()}</h3>
            <hr className="contact__panel-hr" />
            <div className="contact__panel-content">{children}</div>

            <style jsx global>{`
                .contact__contact-panel {
                    display: inline-block;
                    min-width: 30%;
                    margin: 50px;
                    text-align: left;
                }

                @media screen and (max-width: 825px) {
                    .contact__contact-panel {
                        min-width: 100%;
                        margin: 0;
                        padding: 50px;
                    }
                }

                .contact__panel-icon {
                    color: var(--accent-primary);
                }

                .contact__panel-icon,
                .contact__panel-heading {
                    display: inline-block;
                    margin-right: 20px;
                    vertical-align: middle;
                }

                .contact__panel-heading {
                    letter-spacing: 2px;
                }

                .contact__panel-hr {
                    margin: 20px 0;
                    border: 1px solid;
                }

                .contact__contact-panel p {
                    color: var(--text-secondary);
                    letter-spacing: 1px;
                    margin: 2px 0;
                }
            `}</style>
        </div>
    );
}
