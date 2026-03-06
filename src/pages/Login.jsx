import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <InputField
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button text="Login" type="primary" onClick={handleLogin} />
    </div>
  );
};

export default Login;