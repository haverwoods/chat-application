import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookies from "universal-cookie"
import Channelistcontainer from "./components/channelistcontainer"
import Channelcontainer from "./components/channelcontainer"
import Login from "./pages/login"
import Signup from "./pages/signup"

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
         <Route path="/" element={<Home/>}/>         
         <Route path="/home" element={<Home/>}/>         
         <Route path="/home" element={<Home/>}/>         
         <Route path="/login" element={<Login/>}/>         
         <Route path="/signup" element={<Signup/>}/>
                 
      </Routes>
  </div>
   
  )
}

export default App
