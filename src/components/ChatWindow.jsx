const ChatWindow = ({ messages }) => {
  console.log("Messages in ChatWindow:", messages); // Debugging

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 my-2 rounded-lg ${
            msg.isUser ? "bg-blue-500 text-white self-end" : "bg-white text-black self-start"
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
