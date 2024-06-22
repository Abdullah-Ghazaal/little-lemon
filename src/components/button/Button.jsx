import "./button.css";

function Button({ children, btnColor, btnType = "" }) {
  return (
    <button type={btnType} className={`btn btn-${btnColor} btn-hoverd`}>
      {children}
    </button>
  );
}

export default Button;
