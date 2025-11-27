import React, { useState } from "react";
import axios from "axios";

export default function AiChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const askAI = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    const res = await axios.post("/api/ai/generate", {
      prompt: input,
    });

    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: res.data.response },
    ]);

    setInput("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>AI Assistant</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 300,
          overflowY: "auto",
          background: "#fafafa",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        style={{ width: "80%", padding: 10, marginTop: 10 }}
      />
      <button onClick={askAI} style={{ padding: 10 }}>Send</button>
    </div>
  );
}
