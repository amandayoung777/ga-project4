import { useEffect, useState } from "react";
import axios from "axios";

async function Login(props) {
    const [name, setName] = useState([]);
    return (
        <div className="Login">
            <form>
            <p>Login</p>

            <p><label for="name">Name: </label></p>
            <p><input type="text" name="name" placeholder="name"></input></p>
            <p><label for="email">Email Address: </label></p>
            <p><input type="email" name="email" placeholder="email address"></input></p>
            <p><label for="message">How can I help? </label></p>
            <p><input className="input-box" type="message" name="message" placeholder="Order? Feedback? General fun comment?" maxlength="250"></input></p>
            <button>Submit</button>
            
            </form>
      </div>
    );
  }

  export default Login