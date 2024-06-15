import "./button.css";

function Button({ children, btnColor }) {
  return (
    <button className={`btn btn-${btnColor} btn-hoverd`}>{children}</button>
  );
}

export default Button;
