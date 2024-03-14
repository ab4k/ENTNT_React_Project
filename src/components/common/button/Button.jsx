import Dashboard from "../../dashboard/Dashboard";
import "./button.css";
import { useNavigate } from "react-router-dom";
const Button = ({ children, type = "button", onClick, className, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`custom-button ${className}`}
      element={<Dashboard />}
    >
      {children}
    </button>
  );
};

export default Button;
