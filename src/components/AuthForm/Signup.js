import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { signUpApi } from "../../apis/book";
const SignUp = () => {
  // const submitHandler = () => {};
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signUpApi({ username, password });
      authCtx.login({ user: data.user, token: data.token });
    } catch (error) {
      console.log(error);
      if (typeof error == "string") {
        setError(error);
        return;
      }
    }
  };
  if (error) {
    return <div>{error} Please refresh</div>;
  }
  if (authCtx.isLoggedIn) {
    navigate("/");
  }
  return !authCtx.isLoggedIn ? (
    <section className={classes.auth}>
      <h1>{"Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          {!loading ? (
            <button>{"Create Account"}</button>
          ) : (
            <p>Sending req to server</p>
          )}
          <Link className={classes.toggle} to="/login">
            {"Login with existing account"}
          </Link>
        </div>
      </form>
      {error && <p>{error}</p>}
    </section>
  ) : (
    <Navigate to="/" />
  );
};

export default SignUp;
