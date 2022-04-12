import Button from '../../commons/Button';

import './Onboarding.css';

const Onboarding = () => {
    return (
        <div className="Oboarding">
            <h1 className="title extra-large">
                TRIV
                <br />
                YA
            </h1>
            <Button>Login with Google</Button>
            <Button>Login</Button>
            <p>Don't have an account? Sign-up here.</p>
        </div>
    );
};

export default Onboarding;