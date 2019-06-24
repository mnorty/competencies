import React from 'react'
import './Nav.css'
import {withRouter} from 'react-router-dom'
const Nav = (props) => {
  
  return(
    <div>
      {props.location.pathname !== '/'
        ?<h1 className="Nav">
          Nav
        </h1>
        :null
      }
    </div>
  ) 
  }

export default withRouter(Nav)