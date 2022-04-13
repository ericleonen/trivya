import Button from '../../commons/Button';
import { Link, useNavigate } from 'react-router-dom';

import './Onboarding.css';

const Onboarding = () => {
    const navigate = useNavigate();

    return (
        <div className="Onboarding view">
            <h1 className="onboarding-title title extra-extra-large">
                TRIV
                <br />
                YA
            </h1>
            <Button color="#0D5BDD">Login with Google</Button>
            <Button color="#E0E0E0" darkText func={() => navigate('user/login')}>Login with Email</Button>
            <p className="no-account-text text">
                Don't have an account? 
                <br /> 
                <Link to="user/signup" className="sign-up-link">Sign up</Link> here.
            </p>
        </div>
    );
};

export default Onboarding;