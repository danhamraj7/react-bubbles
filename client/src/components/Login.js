import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const changeHandle = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandle = e => {
    e.preventDefault();

    axios

      .post(`http://localhost:5000/api/login`, login)
      .then(res => localStorage.setItem("token", res.data.payload))
      .catch(error => console.log(error));

    setLogin({ username: "", password: "" });
    props.history.push(`/bubblepage`);
  };

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
