import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../components/home"
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import Channelistcontainer from "../components/channelistcontainer"
import Channelcontainer from "../components/channelcontainer"

 const apikey = 'h5nj4fhbszbg'
 const client = StreamChat.getInstance(apikey);

  const App =() =>{


  return (
  <div className="app_wrapper">
    <Chat client={client} theme="team light">
      <Channelistcontainer
      
      />
      <Channelcontainer
      
      />

      
    </Chat>


      <Routes>
         <Route path="/" element={<Home/>}/>         
      </Routes>
  </div>
   
  )
}

export default App
