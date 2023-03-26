import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>here is our terms and conditions</h3>
            <p>go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;