import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";



const SignUpForm = () => {
    useRedirect('loggedIn')
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    })
    const {username, password1, password2} = signUpData

    const history = useHistory()

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            history.push('/signin')
        }catch(err){
            setErrors(err.response?.data)
        }
    }
  return (
    <>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="text" 
                placeholder="username" 
                name="username"
                value={username}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.username?.map((message, idx) =>
                <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="password" 
                placeholder="password" 
                name="password1"
                value={password1}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password1?.map((message, idx) =>
                <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control 
                className={styles.Input}
                type="password" 
                placeholder="confirm password" 
                name="password2"
                value={password2}
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password2?.map((message, idx) =>
                <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button 
            className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} 
            type="submit"
            
            >
                Sign Up
            </Button>
            {errors.non_field_errors?.map((message, idx) =>
                <Alert variant="warning" key={idx} className="mt-3">
                    {message}
                </Alert>
            )}

        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
</>
  );
};

export default SignUpForm;