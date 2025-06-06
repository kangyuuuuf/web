// Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chat.css';
import ReactMarkdown from 'react-markdown'

export default function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [chatboxHeight, setChatboxHeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setChatboxHeight(`${window.innerHeight - 65}px`);
    // (optional) update if window resizes:
    const handleResize = () => setChatboxHeight(`${window.innerHeight - 95}px`);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const messageSend = () => {
    if (!message.trim()) return;

    // append user message
    const newHistory = [
      ...chatHistory,
      { role: 'user', content: message.trim(), citation: [] }
    ];
    setChatHistory(newHistory);
    setIsLoading(true);
    // send to backend
    axios.post(
      'http://127.0.0.1:5000/chat',
      newHistory
    ) 
      .then((res) => {
        setChatHistory(prev => {
          const next = [
            ...prev,
            {
              role: 'assistant',
              content: res.data[res.data.length - 1].content.result,
              citation: res.data[res.data.length - 1].content.source_documents
            }
          ];
          return next;
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setMessage('');
  };

  return (
    <div className="drawer-container">
      <div
        className="chatbox"
        style={{ height: chatboxHeight }}
      >
        {chatHistory
          .slice()
          .reverse()
          .map((chat, idx) => (
            <React.Fragment key={idx}>
      {/* Show the robot emoji if it’s an assistant message */}
      {chat.role === 'assistant' && (
        <div className="left">🤖--|</div>
      )}
            <div
              className={
                chat.role === 'assistant'
                  ? 'chatbar_left'
                  : 'chatbar_right'
              }
            >
              <ReactMarkdown   components={{
    ul: ({node, ...props}) => (
      <ul
        style={{
          listStyleType: 'disc',
          paddingLeft: '1.2em',
          margin: '0.5em 0'
        }}
        {...props}
      />
    ),
    ol: ({node, ...props}) => (
      <ol
        style={{
          listStyleType: 'decimal',
          paddingLeft: '1.2em',
          margin: '0.5em 0'
        }}
        {...props}
      />
    ),
    li: ({node, ...props}) => (
      <li style={{ margin: '0.2em 0' }} {...props} />
    )
  }} >{chat.content}</ReactMarkdown>
              {chat.role === 'assistant' ? chat.citation.map((c, idx) => 
                <div key={idx}>[ {idx}  ]  {c.source} {c.page}</div>) : ''}
              
            </div>
            {chat.role === 'assistant' && (
        <div className="right">|-- 🤓</div>
      )}
            </React.Fragment>
          ))}
      </div>

      <div className="inputbar">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') messageSend();
          }}
          placeholder="Please input"
          className="chat-input"
        />
        <button
          onClick={messageSend}
          className="send-button"
          aria-label="send"
          disabled={isLoading}
        >
          ➤
        </button>
      </div>
    </div>
  );
}
