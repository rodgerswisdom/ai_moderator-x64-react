import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import ChatHistory from "./components/ChatHistory";
import Account from "./components/Account";
import { sendMessageToAI } from "./services/api"; // Import API function

const App = () => {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([{ title: "Chat 1" }]);

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { text, isUser: true }]); // Add user message

    const response = await sendMessageToAI(text); // Send message to backend

    setMessages((prev) => [...prev, { text: response.chat_response, isUser: false }]); // Add AI response
  };

  return (
    <div className="flex h-screen">
      <ChatHistory history={history} onSelect={() => {}} />
      <div className="flex flex-col flex-1">
        <Account />
        <ChatWindow messages={messages} />
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default App;
