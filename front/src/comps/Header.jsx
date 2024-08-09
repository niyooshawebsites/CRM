import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
        ></button>
      </nav>
      <div className="collapse navbar-collapse" id="navigation">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
