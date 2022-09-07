import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
    let navigate = useNavigate();
    // const [register, handlesubmit, errors] = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [data, setData] = useState([]);
    const token = localStorage.getItem('Token-ID')


    const login = async (data) => {
        console.log(data);
        try {
            const url = 'https://reqres.in/api/login';
            await axios.post(url, {
                "email": data.email,
                "password": data.password,
            }).then((responce) => {
                console.log('token', responce.data.token);
                if (token === responce.data.token) {
                    navigate('/dashboard')
                }
            });
            // console.warn('Login', data)

            // if (token === data.token) {
            //     navigate('/dashboard')
            // }
        } catch (error) {
            console.log(error)
        }

    };




    return (
        <div>
            <Container className="p-4">
                <h1 className="">Login Here</h1>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Form onSubmit={handleSubmit(login)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email"{...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                                {errors.email && errors.email.type === "required" && (
                                    <p className="text-danger">Email is required.</p>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <p className="text-danger">Email is not valid.</p>
                                )}
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password"  {...register('password', { required: true, minLength: 6 })} />
                                {errors.password && errors.password.type === "required" && (
                                    <p className="text-danger">Password is required.</p>
                                )}
                                {errors.password && errors.password.type === "minLength" && (
                                    <p className="text-danger">Password minlength is 6</p>
                                )}
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={() => login()}>
                                Sing IN
                            </Button>
                        </Form>
                        <br />
                        <Button onClick={() => navigate('/registration')}>Sing Up Here!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login