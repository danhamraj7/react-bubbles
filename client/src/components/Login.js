import React from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  return (
    <>
      <div className="Header">
        <h1>Welcome to the Bubble App!</h1>
      </div>
      <form onSubmit={submitHandle}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              value={login.username}
              onChange={changeHandle}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="password"
              value={login.password}
              onChange={changeHandle}
            />
          </label>
        </div>

        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
