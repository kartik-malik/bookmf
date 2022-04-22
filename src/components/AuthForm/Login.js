import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loginApi } from "../../apis/book";
import { AuthContext } from "../../Providers/AuthProvider";
import classes from "./AuthForm.module.css";
const LoginForm = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  if (authCtx.isLoggedIn) {
    navigate("/");
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await loginApi({ username, password });
      authCtx.login({ user: data.user, token: data.token });
    } catch (error) {
      console.log(error);
      if (typeof error == "string") {
        setError(error);
        return;
      }
      setError(error.message);
    }
  };

  return !authCtx.isLoggedIn ? (
    <section className={classes.auth}>
      <h1>{"Login"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Your username</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{"Login"}</button>
          <Link to="/signup" className={classes.toggle}>
            {"Create new account"}
          </Link>
        </div>
      </form>
      {error && <p>{error}</p>}
    </section>
  ) : (
    <Navigate to="/" />
  );
};

export default LoginForm;
