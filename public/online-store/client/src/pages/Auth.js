import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Write your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Write your password..."
                    />
                    <Container className="d-flex p-0 justify-content-between mt-3">
                        {isLogin?
                            <div style={{width:300}}>
                                Don't have account yet? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div style={{width:300}}>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                            </div>
                        }
                        <Button variant='outline-success' style={{width:150}}>
                            {isLogin? 'Log In' : 'Registration'}
                        </Button>
                    </Container>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;