import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ErrorCircle() {
    return (
        <>
            <FontAwesomeIcon icon="times-circle" className="error-circle" />
            <style jsx global>{`
                .error-circle {
                    background-color: var(--accent-failure-primary);
                    border-radius: 50%;
                    padding: 5px;
                    width: 22px !important;
                    height: 22px !important;
                    vertical-align: middle;
                    margin: 0 15px;
                }
            `}</style>
        </>
    );
}
