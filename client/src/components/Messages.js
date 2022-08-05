import { useEffect, useState } from "react";
import axios from "axios";

function Messages() {
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    axios
      .get('api/messages')
      .then((response) => {
        console.log(response.data);
        setAllMessages(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (

    <div className="Messages">
      <div className="msg">
        {allMessages.map((msg) => {
          return (
            <div className="msg-id">
              <p>{msg.name}</p>
              <p>{msg.email}</p>
              <p>{msg.message}</p>

        
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default Messages;