import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Perks() {
    return (
        <section className="perks">
            <div className="perks__heading-container">
                <hr className="perks__hr" />
                <h1 className="perks__heading">De ce este mai bun infoplus?</h1>
            </div>

            <PerkPanel title="Viteză" icon="bolt">
                infoplus a fost conceput cu eficiență, accesibilitate și viteză
                de încărcare în considerare, pentru a conferi calculatoarelor
                școlare deficitare o experiență plăcută.
            </PerkPanel>
            <PerkPanel title="Conveniență" icon="coffee">
                Cu trăsături făcute pentru a ușuraviața atât celui care predă,
                cât și a elevului, toate necesitățile cheiesunt la un click
                depărtare, construite intuitiv.
            </PerkPanel>
            <PerkPanel title="Utilitate" icon="tools">
                Am creat pentru acest site utilități care chiar sunt dorite, și
                folositoare înviața reală, cum ar fi: mod proiector, temă
                întunecată, și altele.
            </PerkPanel>
            <PerkPanel title="Stabilitate" icon="mountain">
                Teama că site-ul poate va fi offline temporar și nu vei mai
                putea accesa con-tul și probleme pe care trebuie să lerezolvi,
                este inutilă, deoarece acest site este online 24/7.
            </PerkPanel>
            <style jsx>
                {`
                    .perks {
                        width: 100%;
                        height: auto;
                        background-color: var(--background-secondary);
                        color: var(--text-primary);
                        transition: color, background-color 300ms ease;
                        padding: 100px 0;
                        text-align: center;
                    }

                    .perks__heading-container {
                        padding-bottom: 100px;
                        position: relative;
                    }

                    .perks__hr {
                        width: 100%;
                        z-index: 1;
                        display: inline-block;
                        position: absolute;
                        left: 0;
                    }

                    .perks__heading {
                        padding: 0 20px;
                        margin-top: -20px;
                        display: inline-block;
                        z-index: 2;
                        background-color: var(--background-secondary);
                        transition: background-color 300ms ease;
                        position: relative;
                    }
                `}
            </style>
        </section>
    );
}

function PerkPanel({ title, icon, children }) {
    return (
        <div className="perks__perk">
            <div className="perk__icon-title">
                <div className="perk__icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <h2 className="perk__title">{title}</h2>
            </div>
            <p className="perk__description">{children}</p>

            <style jsx>{`
                .perks__perk {
                    max-width: 30%;
                    display: inline-flex;
                    flex-direction: column;
                    margin: 50px 80px;
                }

                @media screen and (max-width: 817px) {
                    .perks__perk {
                        max-width: 100%;
                    }
                }

                @media screen and (max-width: 576px) {
                    .perk__title {
                        font-size: var(--font-small);
                    }

                    .perks__perk {
                        margin-left: 30px;
                        margin-right: 30px;
                    }
                }

                .perk__icon-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    border-bottom: 2px solid var(--background-tertiary);
                }

                .perk__icon {
                    width: 30px;
                    height: 30px;
                    background-color: var(--background-quaternary);
                    transition: background-color 300ms ease;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                :global(.perk__icon svg) {
                    width: 15px;
                    height: 15px;
                    color: var(--accent-tertiary);
                    transition: color 300ms ease;
                }

                .perk__description {
                    text-align: left;
                    color: var(--text-primary);
                    transition: color 300ms ease;
                    line-height: 30px;
                }
            `}</style>
        </div>
    );
}
