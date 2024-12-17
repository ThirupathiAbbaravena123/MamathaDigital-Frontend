import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../assets/RegistrationPage.css";
import Mamathalog from "../assets/Login1.png";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobilenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    gender: "",
  });

  const [showPassword, setShowPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const changeInputFieldData = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post("http://localhost:8080/mamathadigital/user/register", {
        fullName: formData.fullName,
        mobilenumber: formData.mobilenumber,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        termsAccepted: formData.termsAccepted,
        gender: formData.gender,
      });
      setMessage("Registration Successful!");
      console.log("API Response:", response.data);
    } catch (error) {
      console.log("API Error:", error);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Something went wrong.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const ToggleVisibility = (fieldName) => {
    setShowPassword((prev) => (prev === fieldName ? "" : fieldName));
  };

  return (
    <div className="registration-container">
      <div className="left-section">
        <img src={Mamathalog} alt="Mamatha Logo" className="logo" />
      </div>
      <div className="right-section">
        <div className="form-box">
          <h2>Register</h2>
          <p>Start your Journey now with us</p>
          <p style={{color:"red"}}>{message && <p className="form-message" style={{color:"red"}}>{message}</p>}</p>
          <form onSubmit={submitFormData}>
            <input
              type="text"
              name="fullName"
              id="fullname"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={changeInputFieldData}
              disabled={loading}
              required
            />
            <input
              type="number"
              name="mobilenumber"
              placeholder="Enter Mobile Number"
              value={formData.mobilenumber}
              onChange={changeInputFieldData}
              disabled={loading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email id"
              value={formData.email}
              onChange={changeInputFieldData}
              disabled={loading}
              required
            />
            <div className="password-field">
              <input
                type={showPassword === "password" ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={changeInputFieldData}
                disabled={loading}
                required
              />
              <span
                className="toggle-password"
                onClick={() => ToggleVisibility("password")}
              >
                <FontAwesomeIcon
                  icon={showPassword === "password" ? faEyeSlash : faEye}
                />
              </span>
            </div>
            <div className="password-field">
              <input
                type={showPassword === "confirmPassword" ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={changeInputFieldData}
                disabled={loading}
                required
              />
              <span
                className="toggle-password"
                onClick={() => ToggleVisibility("confirmPassword")}
              >
                <FontAwesomeIcon
                  icon={showPassword === "confirmPassword" ? faEyeSlash : faEye}
                />
              </span>
            </div>
            <div className="address-type">
              <label>
                Gender <span className="required">*</span>
              </label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={changeInputFieldData}
                    disabled={loading}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={changeInputFieldData}
                    disabled={loading}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={changeInputFieldData}
                    disabled={loading}
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="terms">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={changeInputFieldData}
                  required
                  className="checkType"
                  disabled={loading}
                />
                I agree to all the <a href="#">terms and conditions</a>
              </label>
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
          <p className="or-login">Or Login with</p>
          <div className="social-buttons">
            <a
              href="#"
              className="social-btn btn btn-outline-primary google"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-google fa-google"></i> Google
            </a>
            <a
              href="#"
              className="social-btn btn btn-outline-primary facebook"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-facebook"></i> Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
