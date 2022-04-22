import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import PokeForm from "../../SearchForm/SearchForm";

import classes from "./Navbar.module.css";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = () => {
    authCtx.logout();
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Books</div>
      </Link>
      <PokeForm />
      <nav>
        <ul>
          {authCtx.isLoggedIn ? (
            <>
              {authCtx.user.isAdmin && (
                <li>
                  <Link to={`/book/add`}>Add Book </Link>
                </li>
              )}
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
