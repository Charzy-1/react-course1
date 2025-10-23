import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App () {
  const [chatMessages, setChatMessage] = useState([{
    message: 'Hello chatbot!',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello How can i help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: "Can you get me today's date?",
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is October 17',
    sender: 'robot',
    id: 'id4'
}])

return (
  <div className='app-input-container'>
    <ChatMessages 
      chatMessages={chatMessages}
    />
    <ChatInput 
      chatMessages={chatMessages}
      setChatMessage={setChatMessage}
    />
  </div>
);
};

export default App
