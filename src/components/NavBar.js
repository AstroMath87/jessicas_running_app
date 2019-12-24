import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import strava_logo from '../assets/strava_logo.png'
import twitter_logo from '../assets/twitter_logo.png'

const navBar = ({ children }) => { 

return (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">Jessica&trade;</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/races">Races</Nav.Link>
            <Nav.Link href="/training">Training</Nav.Link>
          </Nav>

          {/* social media links on navbar */}
          <Navbar.Brand href="https://www.strava.com/athletes/12012705">
              <img
                alt=""
                src={strava_logo}
                width="30"
                height="30"
                className="d-inline-block align-right"
              />{' '}
              </Navbar.Brand>
            <Navbar.Brand href="https://twitter.com/hogesrun">
              <img
                alt=""
                src={twitter_logo}
                width="30"
                height="30"
                className="d-inline-block align-right"
              />{' '}
              </Navbar.Brand>
        </Navbar>
        {children}
    </div>
          
)

}

export default navBar; 