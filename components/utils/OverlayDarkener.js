export default function OverlayDarkener({ onClick, className = "" }) {
    return <div className={`overlay-darkener ${className}`} onClick={onClick}></div>;
}
