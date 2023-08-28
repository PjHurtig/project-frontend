import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../assets/logo-blue.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar 
    bg="light" 
    expand="lg"
    className={styles.Navbar}
    >
			<Container>

				<Navbar.Brand>
          <img src={logo} 
          alt='logo' 
          height='45' 
          />
          Republic
        </Navbar.Brand>
        
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">

					<Nav.Link>
          <i class="fa-solid fa-house"></i>
            Home
          </Nav.Link>

					<Nav.Link
          >
            <i class="fa-solid fa-right-to-bracket"></i>
            Sign In
          </Nav.Link>

					<Nav.Link
          
          >
            <i class="fa-solid fa-user-plus"></i>
            Sign Up
          </Nav.Link>

          <i class="fa-solid fa-id-badge"></i>
					<NavDropdown title="Profile" id="basic-nav-dropdown"> 
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