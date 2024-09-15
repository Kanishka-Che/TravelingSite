import React from 'react'
import './navbar.css'
import logo from 'C:/Users/Chethana/Desktop/Travel/travelingsite/Travelingsite/src/assets/images02.jpeg'

const Navbar = () =>{

    return(
        <section className='navBarSection'>
           <header className='header flex'>

              
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <h1>TRAVEL</h1>
                </a>
              </div> 
              <div className="logo">
                <img src={logo} alt=""/>
              </div>

                <div>
                 <ul>
                    <li>
                      <a href="#" className="navLink">Home</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">About</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Contact Us</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Login</a>
                    </li>

                    <li className='navItem'>
                      <a href="#" className="navLink">Register</a>
                    </li>
                  </ul>  

                </div>  
              
        </header>
        </section>
    )
}

export default Navbar
