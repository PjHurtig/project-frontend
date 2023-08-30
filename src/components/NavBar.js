import axios from 'axios'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-blue.png'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import styles from '../styles/NavBar.module.css'
import Avatar from './Avatar'

const NavBar = () => {
    const currentUser = useCurrentUser()
    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

    const addPostIcon = (
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/posts/create"
        >
          <i className="far fa-plus-square"></i>Add post
        </NavLink>
      );

    const loggedInIcons = <>

      <NavDropdown 
                    title={currentUser?.username} 
                    id="basic-nav-dropdown"
                    > 
                        
						<NavDropdown.Item>
                            <NavLink to={`/profiles/${currentUser?.profile_id}`}>
                            <Avatar 
                            src={currentUser?.profile_image} 
                            height={40} 
                            />
                            My Profile
                            </NavLink>
                        </NavDropdown.Item>
                        

						<NavDropdown.Item>Add Gear</NavDropdown.Item>
						<NavDropdown.Item>Calendar</NavDropdown.Item>
						<NavDropdown.Divider />

                        
                        <NavDropdown.Item>
                            <NavLink 
                            to="/"
                            onClick={handleSignOut}
                            >
                            <i className="fas fa-sign-out-alt"></i>
                            Sign Out
                            </NavLink>
                        </NavDropdown.Item>
                        
                        
					</NavDropdown>
    
    </>
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
        
        {currentUser && addPostIcon}

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

                <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/calendar"
                >
                <i className="fas fa-stream"></i>Calendar
                </NavLink>

                {currentUser ? loggedInIcons : loggedOutIcons}
					
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