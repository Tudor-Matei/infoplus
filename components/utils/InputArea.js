export default function InputArea({ title, subtitle, children }) {
  return (
    <>
      <div className="input-area">
        <div className="title-and-subtitle">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children}
      </div>
      <style jsx>{`
        h3 {
          text-align: left;
          text-transform: uppercase;
          color: var(--text-primary);
          font-size: var(--font-smaller);
        }

        p {
          color: var(--text-primary);
          max-width: 400px;
        }

        .title-and-subtitle {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
