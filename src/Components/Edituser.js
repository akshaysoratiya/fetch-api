import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edituser() {
    let navigate = useNavigate();
    const [name, setName] = useState();
    const [data, setData] = useState([]);
    const [job, setJob] = useState();
    const [user, setUser] = useState();

    console.log('display data', data);
    useEffect(() => {
        (async () => {
            const post = await axios.get('https://reqres.in/api/users/2');
            setData(post.data)
        })()
    }, [])

    const edituser = async () => {
        const url = 'https://reqres.in/api/users/2';
        await axios.put(url, {
            "name": name,
            "job": job
        }).then((responce) => setUser(responce.data));
        console.warn('Data Edited successfully', user)
        navigate('/dashboard');
    }
    return (
        <div>
            <Container className="p-4">
                <h1 className="">Edit user Here</h1>
                <Row className="justify-content-center">
                    <Col className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label> Enter Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" value={data.first_name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicJob">
                                <Form.Label>Enter Job</Form.Label>
                                <Form.Control type="text" placeholder="Job" value={data.email} onChange={(e) => setJob(e.target.value)} />
                            </Form.Group>
                            <Button onClick={() => edituser()} variant="primary">
                                Edit User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Edituser