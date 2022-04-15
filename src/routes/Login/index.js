import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';
import { useState } from 'react';
import { logInWithEmailAndPassword } from '../../firebase/authentication';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="Login view">
            <TopBar text="Login" showBackArrow/>
            <div className="input-fields">
                <Input label="email" setValue={setEmail} value={email}/>
                <Input label="password" setValue={setPassword} value={password}/>
            </div>
            <Button 
                color="#92D35B" 
                darkText 
                func={() => logInWithEmailAndPassword(email, password)}
            >
                Login
            </Button>
            <p className="user-sub-text text">
                Forgot your password?
                <br /> 
                <Link to="/user/reset" className="link">Reset</Link> it here.
            </p>
        </div>
    );
};

export default Login;