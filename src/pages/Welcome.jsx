import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const goToSignup = () => navigate("/signup");
  const goToLogin = () => navigate("/login");

  return (
    <div className="container">
      <h1>Welcome to PopX</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <Button text="Create Account" type="primary" onClick={goToSignup} />

      <Button
        text="Already Registered? Login"
        type="secondary"
        onClick={goToLogin}
      />
    </div>
  );
};

export default Welcome;