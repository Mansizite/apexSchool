"use client";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaLock } from "react-icons/fa"; // For icons inside input fields.

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Optional for error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setErrorMessage("Both fields are required");
      return;
    }
    console.log("Logging in...", formData);
    setErrorMessage(null); // Clear error message if valid
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body p-5">
          <h2 className="card-title text-center text-primary mb-4">APEX ERP Login</h2>

          {/* Error message (if any) */}
          {errorMessage && (
            <div className="alert alert-danger text-center mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4 position-relative">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <FaUser className="text-muted" />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder=" "
                  className="form-control border-start-0 py-3"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <label className="position-absolute  top-0 text-muted fs-6" style={{left:'50px',marginTop:'17px'}} >
                Username
              </label>
            </div>

            <div className="mb-4 position-relative">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <FaLock className="text-muted" />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  className="form-control border-start-0 py-3"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <label className="position-absolute  top-0 text-muted fs-6" style={{left:'50px',marginTop:'17px'}}>
                Password
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 mt-4"
            >
              Login
            </button>
          </form>

          <a href="#" className="d-block text-center mt-3 text-secondary">
            Forgot Password?
          </a>

          <div className="text-center mt-4">
          <p className="mb-0">Don&apos;t have an account?</p>

            <a href="#" className="text-primary">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
