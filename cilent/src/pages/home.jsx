import React from "react";
import ChannelList from "../components/channelistcontainer";

const Home = () => {
  return (
    <div>
    <div className=" relative bg-cyan-700 h-5/6 w-screen">
    <ChannelList className=" h-screen"/>
      {/* <MessageCircle /> */}
      <h1 className="text-3xl font-bold underline text-cyan-500 mt-1 ml-10 mb-9">
        {" "}
        sync chat{" "}
      </h1>
      <div className="flex flex-col h-full bg-gray-100">
        {/* Chat messages area */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* {messages.map((msg) => ( */}
            {/* <div key={msg.id} className="my-2"> */}
            <div  className="my-2">
              {/* <p className="text-sm font-semibold">{msg.user.name}</p> */}
              <p className="text-sm font-semibold">user name</p>
              <p className="text-base bg-white p-2 rounded-lg shadow-md">
                {/* {msg.text}*/} texts
              </p>
            </div>
          {/* ))} */}
        </div>

        {/* Message input box */}
        <form
          // onSubmit={handleSendMessage}
          className="flex items-center p-2 bg-white shadow-md"
        >
          <input
            type="text"
            // value={newMessage}
            // onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>

  
    </div>
    </div>

  );
};

export default Home;
