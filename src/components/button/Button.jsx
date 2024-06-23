import "./button.css";

function Button({ children, btnColor, btnType = "", disabled = false }) {
  return (
    <button
      type={btnType}
      className={`btn btn-${btnColor} btn-hoverd`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
