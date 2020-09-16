import React from 'react'
import { MessageContext } from "../contexts/MessageContext";
import MessageDetail from './MessageDetail';


function MessageList() {
    const {messages} = useContext(MessageContext)
    return messages.length?(
        <div>
            <ul>
                {messages.map((message)=>{
                    return (
                        <MessageDetail key={message.id} message={message}/>
                    )
                })}
            </ul>
        </div>
    ):(
        <div>
            No Messages!!
        </div>
    )
}

export default MessageList
