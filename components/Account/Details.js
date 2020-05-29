export default function AccountDetails() {
    return (
        <div className="details-account">
            <div className="details-account__category">
                <div className="details-account__row details-account__row--category">Nume</div>
                <div className="details-account__row details-account__row--category">Prenume</div>
                <div className="details-account__row details-account__row--category">E-Mail</div>
                <div className="details-account__row details-account__row--category">Telefon</div>
                <div className="details-account__row details-account__row--category">Regiune</div>
            </div>
            <div className="details-account__info">
                <div className="details-account__row details-account__row--info">John</div>
                <div className="details-account__row details-account__row--info">Doe</div>
                <div className="details-account__row details-account__row--info">
                    johndoe@longexample.com
                </div>
                <div className="details-account__row details-account__row--info">
                    +0007123456789
                </div>
                <div className="details-account__row details-account__row--info">USA</div>
            </div>
            <style jsx>{`
                .details-account {
                    width: 90%;
                    border-radius: 20px;
                    margin: 30px auto 150px;
                    display: flex;
                    background-color: var(--background-primary);
                    box-shadow: var(--box-shadow);
                    color: var(--text-primary);
                    transform: color, background-color 300ms ease;
                    animation: comeIn 300ms ease;
                }

                .details-account__category,
                .details-account__info {
                    width: 50%;
                    height: 100%;
                }

                .details-account__category {
                    font-weight: bold;
                }

                .details-account__row {
                    width: 100%;
                    padding: 30px 40px;
                    display: flex;
                    align-items: center;
                    overflow-x: overlay;
                }

                .details-account__row:nth-child(odd) {
                    background-color: var(--background-secondary);
                }

                @media screen and (max-width: 768px) {
                    .details-account {
                        width: 90%;
                    }
                }

                @keyframes comeIn {
                    from {
                        transform: translateX(15px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
