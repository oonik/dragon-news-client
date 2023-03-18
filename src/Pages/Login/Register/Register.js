import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
 const {createUserEmailAndPassword} = useContext(AuthContext)
    const handleRegister =(event)=>{
       event.preventDefault()
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
    //    console.log(name, email, password)

       createUserEmailAndPassword(email, password)
       .then(result => {
        const user = result.user;
        console.log(user)
        form.reset()
       })
       .catch(error => console.error(error))
    }
    return (
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Form.Text className="text-danger">
               
            </Form.Text>
        <Button variant="primary" type="submit">
            Register
        </Button>
    </Form>
    );
};

export default Register;