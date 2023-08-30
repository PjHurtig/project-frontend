import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-blue.png'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    const currentUser = useCurrentUser()
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = 
    <>
        <NavLink
              exact
              to="/signin"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Sign in
            </NavLink>

            <NavLink
              exact
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-user-plus"></i>
              Sign up
            </NavLink>
    </>

  return (
    <Navbar 
    bg="light" 
    expand="lg"
    className={styles.Navbar}
    >
		<Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} 
            alt='logo' 
            height='45' 
            />
            Republic
          </Navbar.Brand>
        </NavLink>
        
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">

					<NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-house"></i>
              Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}

          <i className="fa-solid fa-id-badge"></i>
					<NavDropdown 
                    title={currentUser?.username} 
                    id="basic-nav-dropdown"
                    > 
						<NavDropdown.Item>My Profile</NavDropdown.Item>
						<NavDropdown.Item>Add Gear</NavDropdown.Item>
						<NavDropdown.Item>Calendar</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item>Log Out</NavDropdown.Item>
					</NavDropdown>
					</Nav>
					{/* <Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
					</Form> */}
				</Navbar.Collapse>
			</Container>
    </Navbar>
  )
}

export default NavBar