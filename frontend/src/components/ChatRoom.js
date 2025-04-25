import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../services/socket";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    socket.emit("message", newMessage);
    setMessages((prev) => [...prev, { text: newMessage, self: true }]);
    setNewMessage("");
  };

  const handleNext = () => {
    socket.emit("disconnect");
    navigate("/");
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index} style={{ color: msg.self ? "blue" : "black" }}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ChatRoom;
