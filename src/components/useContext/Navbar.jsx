import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Use Context
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className={(args) => {
                console.log(args);
                return "nav-link";
              }}
            >
              Home
            </NavLink>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
