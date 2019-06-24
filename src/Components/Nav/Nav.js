import React from 'react'
import './Nav.css'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Nav = (props) => {
  
  return(
    <div>
      {props.location.pathname !== '/'
        ?<div className="Nav">
          <Link to='/dashboard'>Home</Link>
          <Link to='/post'>New Post</Link>
          <Link to='/'>Logout</Link>
        </div>
        
        :null
      }
      
    </div>
  ) 
  }

export default withRouter(Nav)