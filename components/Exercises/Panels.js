export default function ExercisesPanel({ title, children, accent }) {
    return (
        <div className="exercises-panel">
            <h2>{title}</h2>
            {children}
            <Wave accent={accent} />
            <style jsx>{`
                .exercises-panel {
                    width: 45%;
                    height: auto;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    display: inline-block;
                    margin: 40px 60px 40px 0;
                    color: var(--text-primary);
                    border-radius: 15px;
                }

                h2 {
                }
            `}</style>
        </div>
    );
}

function Wave({ accent }) {
    return (
        <svg
            width="676"
            height="303"
            viewBox="0 0 676 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                fill={accent}
                d="M262.31 156.616C322.332 159.935 414.419 64.5863 439.555 0H663C670.18 0 676 5.82031 676 13V290C676 297.18 670.18 303 663 303H0.141602C6.132 272.528 112.902 148.352 262.31 156.616Z"
            />

            <style jsx>{`
                svg {
                    opacity: 0.5;
                }
            `}</style>
        </svg>
    );
}
