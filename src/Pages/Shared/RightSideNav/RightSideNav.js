import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSingIn=()=>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                    <h5>Find us on</h5>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'> <FaFacebook/> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'> <FaTwitter/> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'> <FaWhatsapp/> Whatsapp</ListGroup.Item>
                        <ListGroup.Item className='mb-2'> <FaTwitch/> Twitch</ListGroup.Item>
                        <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>
            <div>
                <BrandCarusel></BrandCarusel>
            </div>
        </div>
    );
};

export default RightSideNav;