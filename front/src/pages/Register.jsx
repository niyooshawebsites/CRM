import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5500/api/v1/register", {
      username,
      email,
      password,
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="heading-4 text-center mb-3">Register</h1>
      <form className="w-25" onSubmit={handleRegistration}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            required
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group mb-3">
          <input type="submit" value="Regsiter" className="btn btn-primary" />
        </div>
      </form>
      <span>
        Already have an account! <Link to="/">Login</Link>
      </span>
    </div>
  );
};

export default Register;
