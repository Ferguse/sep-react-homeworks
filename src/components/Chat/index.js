import React, {Component} from 'react'
import './Chat.css'
import Message from '../Message'


class Chat extends Component{

    state = {
        messages :[],
        messageInput : "",
    }

    changeInputMessage = (event) => {
        this.setState({messageInput : event.target.value})
    }

    sendMessageOnEnter = (event) => {
        if (event.key === 'Enter'){
            this.setState(
                {
                    messages : this.state.messages.concat({text : this.state.messageInput}),
                    messageInput : "",
                }
            )
        }
    }
    
    render(){
        const {messageInput} = this.state.messageInput;

        return (
        <div className="chat">
        <div className="message-list">
            <div className="messages">
                {this.state.messages.map((message,id) => {
                    return <Message key={id} text={message.text} />;
                })}
            </div>
        </div>
        <input className="input-message" onKeyPress={this.sendMessageOnEnter} onChange={this.changeInputMessage} value={messageInput} />
        </div>
        )
    }
}

export default Chat;