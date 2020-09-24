import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ErrorComponent({ icon = "times", children }) {
    return (
        <>
            <div className="exercises-not-found">
                <FontAwesomeIcon icon={icon} className="exercises-not-found__icon" />
                <h2>{children}</h2>
            </div>
            <style jsx>{`
                .exercises-not-found {
                    width: 100%;
                    padding: 20px 0 80px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    animation: fadeIn 500ms ease forwards;
                }

                :global(.exercises-not-found__icon) {
                    color: var(--text-primary);
                    width: 80px !important;
                    height: 80px;
                    opacity: 0.7;
                }

                h2 {
                    color: var(--text-primary);
                    margin-top: 30px;
                    font-weight: 300;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}
