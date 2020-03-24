export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__heading">infoplus @ 2020</h1>
            <p className="footer__more-info">Toate drepturile rezervate.</p>

            <style jsx>{`
                .footer {
                    width: 100%;
                    color: var(--text-secondary);
                    background-color: var(--footer);
                    transition: color, background-color 300ms ease;
                    text-align: center;
                    padding: 50px 10px;
                }

                .footer__heading {
                    margin-bottom: 10px;
                }
            `}</style>
        </footer>
    );
}
