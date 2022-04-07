import React from 'react'
import './styles.css'
import {NavLink} from 'react-router-dom'

export default function Routing() {
    return (
       <nav className="navBar" >
           <ul className="List" >
           <NavLink style={styles.navlink} to="/" > <li>  Home  </li></NavLink>
              <NavLink style={styles.navlink} to="/about" ><li> About  </li> </NavLink> 
              <NavLink style={styles.navlink} to="/contact" >    <li>  Contact </li></NavLink> 
           </ul>
       </nav>
    )
}


const styles = {
navlink:{
// backgroundColor :  'red',
padding: '0.6rem',
textDecoration:'none'
}
}