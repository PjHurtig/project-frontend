import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-blue.png'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import styles from '../styles/NavBar.module.css'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'
import Avatar from './Avatar'
import PostCreateForm from '../pages/posts/PostCreateForm'

const NavBar = () => {
    const currentUser = useCurrentUser()
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
        } catch (err) {
          console.log(err);
        }
      };

      const [show, setShow] = useState(false)

      const handleClose = () => {
        setShow(false)
      }

    const addPostIcon = (
      <>
        <Button
          className={styles.NavLink}
          activeClassName={styles.Active}
          onClick={() => setShow(true)}
        >
          <i className="far fa-plus-square"></i> Post
        </Button>

        <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/gearlists/create"
      >
        <i className="far fa-plus-square"></i> Gear
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/events/create"
      >
        <i className="far fa-plus-square"></i> Event
      </NavLink>
      </>
      );

    const loggedInIcons = <>
            
                <NavLink to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar 
                src={currentUser?.profile_image} 
                height={40} 
                />
                my profile
                </NavLink>
                        
                <NavLink 
                to="/"
                onClick={handleSignOut}
                >
                <i className="fas fa-sign-out-alt"></i>
                Sign Out
                </NavLink>

    
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
    <>
    <Navbar 
    expanded={expanded}
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

		<Navbar.Toggle 
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav" />
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
                <i className="fas fa-calendar"></i>Calendar
                </NavLink>

                {currentUser ? loggedInIcons : loggedOutIcons}
					
					</Nav>
				</Navbar.Collapse>
			</Container>
    </Navbar>
    
     <Modal show={show} onHide={handleClose} size='lg'>
     <Modal.Header closeButton>
       <Modal.Title>Modal heading</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <PostCreateForm />
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
   </>
  )
}

export default NavBar