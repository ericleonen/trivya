import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';
import { useState } from 'react';
import { registerWithEmailAndPassword } from '../../firebase/authentication';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return (
        <div className="SignUp view">
            <TopBar text="Sign Up" showBackArrow/>
            <div className="input-fields">
                <Input label="username" setValue={setUsername} value={username}/>
                <Input label="email" setValue={setEmail} value={email}/>
                <Input label="password" setValue={setPassword} value={password}/>
            </div>
            <Button 
                color="#92D35B" 
                darkText
                func={() => registerWithEmailAndPassword(username, email, password)}
            >
                Sign Up
            </Button>
        </div>
    );
};

export default SignUp;