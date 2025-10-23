import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

export function ChatInput ({ chatMessages, setChatMessage }) {
  const [inputText, setInputText] = useState('')

  function saveInputText (event) {
    setInputText(event.target.value)
  }

  function sendMessage () {
    const newChatMessages = [
      ...chatMessages, 
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessage(newChatMessages)

    const response = Chatbot.getResponse(inputText);
    setChatMessage([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('')
  }

  return (
    <div className='chat-input-container'>
      <input 
        placeholder='Send a message to Chatbot'
        size = '30'
        onChange={saveInputText}
        value={inputText}
        className='chat-input'
      />
      <button 
        onClick={sendMessage}
        className='send-button'
      >Send</button>
    </div>
  );
};