import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
    let navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [data, setData] = useState([]);
    const singup = async () => {
        const url = `https://reqres.in/api/register`;
        await axios.post(url, {
            "email": email,
            "password": password
        }).then((responce) => setData(responce.data.token));
        console.warn('Registered', data)
        localStorage.setItem("Token-ID", data)

        // console.log('Registered', data);
        // console.log('Registered', email)
    }




    return (
        <div>
            <Container className="p-4">
                <h1>Registration Here</h1>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" onClick={() => singup()} >
                                Sing Up
                            </Button>
                        </Form>
                        <br />
                        <Button onClick={() => navigate('/login')}>Sing In Here!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration