import React, { useContext, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";
import { ADD_MESSAGE } from "../reducers/MessageReducer";

function MessageForm() {
  const { dispatch } = useContext(MessageContext);
  const [message, setMessage] = useState("");

  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch({ type: ADD_MESSAGE, message: { message} });
     setMessage("");
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={message}
        placeholder="Enter Message"
        required
        onChange={(e) => 
          setMessage(e.target.value)
        }
      />
      <input type="submit" value="Send"/> 
        </form>
    </div>
  );
}

export default MessageForm;
