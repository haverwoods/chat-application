import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import Channelist from "./components/channelist"
import Channelcontainer from "./components/chatwindow"
import Login from "./auth/login"
import Signup from "./auth/signup"
import Chatwindow from "./components/chatwindow"

 const apikey = 'h5nj4fhbszbg'
 const client = StreamChat.getInstance(apikey);

  const App =() =>{


  return (
  <div className="app_wrapper">
    {/* <Chat client={client} theme="team light">
      <Channelistcontainer 

      />
      <Channelcontainer  

      />      
    </Chat> */}


      <Routes>
         {/* <Route path="/" element={<Login/>}/>          */}
         {/* <Route path="/" element={<Home/>}/>          */}
         <Route path="/" element={<Chatwindow/>}/>         
         <Route path="/chatwindow" element={<Chatwindow/>}/>         
         <Route path="/home" element={<Home/>}/>         
         <Route path="/home" element={<Home/>}/>         
         <Route path="/login" element={<Login/>}/>         
         <Route path="/signup" element={<Signup/>}/>
                 
      </Routes>
  </div>
   
  )
}

export default App
