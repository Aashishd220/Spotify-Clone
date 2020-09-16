import React, { useContext } from 'react'
import { MessageContext } from "../contexts/MessageContext";


function MessageDetail({message}) {
   const {dispatch} = useContext(MessageContext)
    return (
        <div>
            <li>
                <h3>{message}</h3>
            </li>
        </div>
    )
}

export default MessageDetail
