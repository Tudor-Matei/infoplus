export default function Loading() {
    return (
        <>
            <div className="loading-animation">
                <div className="loading-animation__rotating-square"></div>
                <h2>Se incarcă...</h2>
            </div>
            <style jsx>{`
                .loading-animation {
                    position: relative;
                    width: 100%;
                    padding: 20px 0 80px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    opacity: 0;
                    animation: fadeIn 500ms ease forwards;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .loading-animation__rotating-square {
                    width: 80px;
                    height: 80px;
                    background-color: var(--accent-tertiary);
                    box-shadow: 0px 0px 15px 0px var(--accent-tertiary);
                    animation: rotateLoadingSquare 1000ms ease infinite;
                }

                h2 {
                    margin-top: 30px;
                    color: var(--text-primary);
                }

                @keyframes rotateLoadingSquare {
                    from {
                        transform: rotateZ(0deg);
                    }
                    to {
                        transform: rotateZ(360deg);
                    }
                }
            `}</style>
        </>
    );
}
