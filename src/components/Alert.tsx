import { ReactNode, useState } from "react";

interface AlertProps {
  look?: string;
  children?: ReactNode;
  showAlert?: () => void;
}

const Alert = ({ look, children, showAlert }: AlertProps) => {
  return (
    <div className={look} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={showAlert}
      ></button>
    </div>
  );
};

export default Alert;
