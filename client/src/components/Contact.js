import { useState } from "react";
import axios from "axios";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {name, email, message};
    setName('');
    setEmail('');
    setMessage('');
    setConfirm("Your message has been sent!");

    axios.post('/api/contact', contact)
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
  };

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit}>
        <h3>Contact Form</h3>

        <p>
          <label for="name">Name: </label>
        </p>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </p>
        <p>
          <label for="email">Email Address: </label>
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </p>
        <p>
          <label for="message">How can I help? </label>
        </p>
        <p>
          <input
            className="input-box"
            type="message"
            name="message"
            placeholder="Order? Feedback? General fun comment?"
            maxLength="250"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </p>
        <button>Submit</button>
            <div className="success-message">
            <h3>{confirm}</h3>
            </div>
      </form>

    </div>
  );
}

export default ContactPage;
