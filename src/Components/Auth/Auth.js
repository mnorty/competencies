import React, {Component} from 'react'
import './Auth.css'


class Auth extends Component{
    constructor(props){
    super(props)
    this.state={
        username:'',
        password:''
    }
    }

    handleUsernameUpdate = (e) => {
        console.log(this.state)
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordUpdate = (e) => {
        console.log(this.state)
        this.setState({
            password: e.target.value
        })
    }

    render(){
        return(
    <div className='Auth'>
        <div className='authContainer'>
           <input type="text" onChange={this.handleUsernameUpdate}></input>
           <input type="text" onChange={this.handlePasswordUpdate}></input>
        </div>
    </div>
        )
    }
}

export default Auth