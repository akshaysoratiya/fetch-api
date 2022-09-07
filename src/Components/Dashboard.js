import React, { useCallback, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { debounce } from 'debounce';



function Dashboard() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  // setPutData(users);


  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    console.log(users);
  };
  React.useEffect(() => {
    f();
  }, []);
  const logout = () => {
    localStorage.removeItem("Token-ID");
    navigate('/login');
  }

  const edituser = () => {
    navigate('/edituser');
  }


  const deleteuser = () => {
    alert('Are you sure you want to deleteuser');
  }

  const adduser = async () => {

    navigate('/adduser');
  }


  const debouncedSave = useCallback(debounce((putdata) => setUsers(putdata), 800), [])

  const searchuser = (e) => {
    // console.log('fjh');
    const search = e.target.value;
    const putdata = users.filter(
      (iteams) =>
        iteams.email.toLowerCase().includes(search) ||
        iteams.first_name.toLowerCase().includes(search) ||
        iteams.last_name.toLowerCase().includes(search)
    );
    debouncedSave(putdata)
    f();
  };
  // useEffect(() => {
  //   f()
  //   searchuser();
  // }, [])

  return (
    <div>
      <Container>
        <Row className="">
          <Col className="p-4">
            <h1>Dashbord</h1>
          </Col>
          <Col className="p-4">
            <Button variant="primary" onClick={() => logout()} >Log Out</Button>
          </Col>
        </Row>
        <Row>
          <h1 className="p-4">Hello ReqRes users!</h1>
          <Button onClick={() => adduser()} variant="primary"  >Add User</Button>
          <Col className="p-4">
            <input onChange={searchuser} type="text" placeholder="Search..."></input>
          </Col>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td> <img src={user.avatar} alt='loading...' /></td>
                      <td>
                        <Button className='m-3' onClick={() => edituser()}>Edit</Button>
                        <Button className='m-3' onClick={() => deleteuser()}>Delete</Button>
                      </td>
                    </tr>
                  );
                }) : "-"}
            </tbody>
          </Table>
        </Row>
      </Container >


    </div >
  )
}


export default Dashboard