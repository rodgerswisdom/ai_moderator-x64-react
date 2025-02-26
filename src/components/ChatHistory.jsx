const ChatHistory = ({ history, onSelect }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      <h2 className="text-lg font-bold">Chat History</h2>
      {history.map((chat, index) => (
        <div
          key={index}
          className="p-2 my-2 bg-white rounded-lg cursor-pointer"
          onClick={() => onSelect(chat)}
        >
          {chat.title}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
