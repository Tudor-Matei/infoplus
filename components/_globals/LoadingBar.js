export default function LoadingBar() {
    return (
        <>
            <div className="loading-bar"></div>
            <style jsx>{`
                .loading-bar {
                    position: fixed;
                    top: 0;
                    z-index: 200;
                    background-color: var(--accent-tertiary);
                    box-shadow: 0px 0px 5px 0px var(--accent-tertiary);
                    width: 0%;
                    display: none;
                    height: 5px;
                    transition: opacity 500ms linear;
                }

                .loading-bar--is-loading {
                    display: block;
                    animation: loading 2000ms ease forwards;
                }

                @keyframes loading {
                    from {
                        width: 0%;
                    }
                    to {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}
