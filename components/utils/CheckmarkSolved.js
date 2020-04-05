import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CheckmarkSolved() {
    return (
        <>
            <FontAwesomeIcon icon="check" className="checkmark-solved" />
            <style jsx global>{`
                .checkmark-solved {
                    display: inline-block;
                    background-color: var(--accent-primary);
                    color: var(--text-button);
                    padding: 5px;
                    border-radius: 50%;
                    width: 22px !important;
                    height: 22px !important;
                    margin-left: 15px;
                    vertical-align: middle;
                }
            `}</style>
        </>
    );
}
