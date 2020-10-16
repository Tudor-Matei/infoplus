import { memo } from "react";
export default memo(function SubmitButton({ title, onClick = null }) {
  return (
    <>
      <button type="submit" disabled={isDisabled} onClick={onClick} className="button--primary">
        {title}
      </button>
      <style jsx>{`
        .button--primary {
          background-color: var(--accent-secondary);
        }
      `}</style>
    </>
  );
});
