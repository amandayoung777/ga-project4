import { useState } from "react";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [logmessage, setLogmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const log = { email, password, name };
    setEmail("");
    setPassword("");
    setLogmessage("You are now logged in");
    setName("");

    axios
      .post("/api/session", log)
      .then((response) => {
        console.log(response);
        props.setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        if (err.response.status === 400) {
          const reason = err.response.data.message;
          alert(reason);
        } else {
          alert("Unknown Error Occured");
        }
      });
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label for="email">Email Address: </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <label for="password">Password </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </p>
        <button>Submit</button>
        <div className="success-message">
            <h3>{logmessage}</h3>
            </div>
      </form>
    </div>
  );
}

export default Login;
