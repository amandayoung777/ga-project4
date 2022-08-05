import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const create = {name, email, password_hash};
        setName('');
        setEmail('');
        setPassword('');
        setMessage("Account Created Successfully!");

        axios.post('/api/users', create)
        .then(response => {
            console.log(response)


        }).catch((err) => {
            console.log(err)
            console.log(err.response)
            if (err.response.status === 400) {
                const reason = err.response.data.message
                alert(reason)
            } else {
                alert('Unknown Error Occured')
            }
        })

    

    }

    return (
        <div className="Sign-Up">
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>           
            <p><label for="name">Name: </label>
            <input type="text" name="name" placeholder="name" autocomplete="off" value={name}
            onChange={(e) => setName(e.target.value)}></input></p>
            <p><label for="email">Email Address: </label>
            <input type="text" name="email" placeholder="email" autocomplete="off" value={email}
            onChange={(e) => setEmail(e.target.value)}></input></p>
            <p><label for="password">Password </label>
            <input type="password" name="password_hash" placeholder="password" value={password_hash}
            onChange={(e) => setPassword(e.target.value)}></input></p>
            <button>Submit</button>
            <div className="success-message">
            <h3>{message}</h3>
            </div>

            
            </form>
      </div>
    );
  }

  export default SignUp