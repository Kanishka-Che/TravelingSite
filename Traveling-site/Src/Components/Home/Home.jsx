import React from 'react'
import './navbar.css'
import logo from 'C:/Users/Chethana/Desktop/Travel/travelingsite/Travelingsite/src/assets/images01.png'

const Home = () =>{

    return(
        <section>
           <header className='headerflex'>

              
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <h1>TRAVEL</h1>
                </a>
                <img src={logo} alt=""/>
              </div>

                <div className='navelement'>
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

export default Home
