import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5500/api/v1/login", {
          username,
          password,
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="heading-4 text-center mb-3">Login</h1>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="username"
            className="form-control"
            placeholder="username"
            required
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group mb-3">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
      <span>
        Don{`'`}t have an account? <Link to="/register">Register Now</Link>
      </span>
    </div>
  );
};

export default Login;
