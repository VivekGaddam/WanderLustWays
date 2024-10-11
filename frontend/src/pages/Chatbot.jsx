import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    if (userMessage.trim()) {
      // Add user message to chat
      setMessages([...messages, { text: userMessage, sender: 'user' }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages([...messages, { text: userMessage, sender: 'user' }, { text: "This is a response from the bot", sender: 'bot' }]);
      }, 1000);

      // Clear input field
      setUserMessage('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={"message ${message.sender}"}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type a message..."
            value={userMessage}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
