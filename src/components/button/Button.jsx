import "./button.css";

function Button({ children, btnColor }) {
  return <button className={`btn btn-${btnColor}`}>{children}</button>;
}

export default Button;
