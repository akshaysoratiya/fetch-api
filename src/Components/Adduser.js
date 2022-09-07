import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Adduser() {
    let navigate = useNavigate();
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const [user, setUser] = useState();
    const adduser = async () => {
        const url = 'https://reqres.in/api/users';
        await axios.post(url, {
            "name": name,
            "job": job
        }).then((responce) => setUser(responce.data));
        console.warn('User Added', user)
        navigate('/dashboard');
    }

    return (
        <div>
            <Container className="p-4">
                <h1 className="">Add user Here</h1>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label> Enter Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicJob">
                                <Form.Label>Enter Job</Form.Label>
                                <Form.Control type="text" placeholder="Job" onChange={(e) => setJob(e.target.value)} />
                            </Form.Group>
                            <Button onClick={() => adduser()} variant="primary">
                                Add User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Adduser