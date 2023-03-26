import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUserEmailAndPassword,updateUserProfile, emailVerify } = useContext(AuthContext)
    const handleRegister = (event) => {
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
                setError('');
                handleUpdateUserProfile(name)
                handleEmailVerification();
                toast.success('Please verify your email address before login')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleUpdateUserProfile = (name, photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error => console.error(error))
    }

    const handleEmailVerification =()=>{
        emailVerify()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    const handleAccept = event =>{
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox"
                onClick={handleAccept} 
                label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;