import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height= "100vh"
            projectID="4f4117de-51dc-45b0-bab2-6d380c28a9ac"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App