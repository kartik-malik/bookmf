import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({
  isLoggedIn: null,
  token: undefined,
  logout: () => {},
  login: (user) => {},
  user: null,
  setUser: () => {},
});
const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("tokn", token);
    setLoggedIn(false);
    setUser(null);
    setToken(null);
  };
  useEffect(() => {
    let token = localStorage.getItem("tokn");
    if (token) {
      let user = jwtDecode(token);
      loginHandler({ user: { ...user, _id: user.id }, token });
    }
  }, []);
  const loginHandler = ({ user, token }) => {
    setUser(user);
    setToken(token);
    setLoggedIn(true);
    localStorage.setItem("tokn", token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser: setUser,
        isLoggedIn: loggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
