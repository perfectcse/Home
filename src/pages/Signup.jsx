import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill required fields");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <InputField
        label="Full Name*"
        type="text"
        name="fullName"
        placeholder="Enter full name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <InputField
        label="Phone number*"
        type="text"
        name="phone"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
      />

      <InputField
        label="Email address*"
        type="email"
        name="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password*"
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <InputField
        label="Company name"
        type="text"
        name="company"
        placeholder="Enter company name"
        value={formData.company}
        onChange={handleChange}
      />

      <div className="input-group">
        <p>Are you an Agency?</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={formData.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={formData.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <Button text="Create Account" type="primary" onClick={handleSignup} />
    </div>
  );
};

export default Signup;