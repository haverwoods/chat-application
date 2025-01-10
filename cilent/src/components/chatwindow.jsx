import React from "react";
import ChannelList from "../components/channelist";

const Chatwindow = () => {
  return (
    <div className="flex h-screen">
        <ChannelList className=" w-1/4 " />
        <div className="flex-1 flex flex-col bg-cyan-100">
        {/* chatbox */}
        <div className="pl-10 flex-1 flex flex-col">
          <h1 className="text-3xl font-bold underline text-cyan-500 mt-1 ml-10 mb-9">
            sync chat
          </h1>
          <div className="flex-1 flex flex-col h-full bg-cyan-100">
            {/* Chat messages area */}
            <div className="   flex-1 p-4 overflow-y-auto rounded-3xl">
              <div className=" my-2">
                <p className="text-sm font-semibold">user name</p>
                <p className="text-base bg-white w-64 p-2 rounded-lg shadow-md">
                  {/* {msg.text}*/} texts
                </p>
              </div>
            </div>

            {/* Message input box */}
            <form
              // onSubmit={handleSendMessage}
              className="flex items-center p-2 bg-cyan-00 shadow-md"
            >
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="mx-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
    
        </div>
      </div>

  );
};

export default Chatwindow;
