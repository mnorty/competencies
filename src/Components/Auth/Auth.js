import React, {Component} from 'react'
import './Auth.css'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


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

    handleUserLogin = (e) => {
		e.preventDefault()
		const { username, password } = this.state
		axios
		.post('/auth/login', { username, password })
		.then((res) => {
			this.props.history.push('/LandingPage')
		})
		.catch((err) => {
			console.log('Username or Password are incorrect')
        })
    }

    handleUserRegister = (e) => {
		e.preventDefault()
		const {email, username, password } = this.state
		axios
			.post('/auth/register', {email, username, password })
			.then((res) => {
				this.props.history.push('/LandingPage')
			})
			.catch((err) => {
				console.log('Username has already been taken')
			})
		// e.target.email.value = ''
		// e.target.password.value = ''
		// e.target.username.value = ''
	}


    render(){
        return(
    <div className='Auth'>
        <div className='authContainer'>
           <input type="text" onChange={this.handleUsernameUpdate}></input>
           <input type="text" onChange={this.handlePasswordUpdate}></input>
           <button onClick={this.handleUserLogin}>Login</button>
           <button onClick={this.handleUserRegister}>Register</button>
        </div>
    </div>
        )
    }
}

export default withRouter(Auth)