import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';
import { useState } from 'react';
import { sendPasswordReset } from '../../firebase/authentication';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="ForgotPassword view">
            <TopBar text="Reset Password" showBackArrow/>
            <div className="input-fields">
                <Input label="email" setValue={setEmail} value={email}/>
            </div>
            <Button 
                color="#92D35B" 
                darkText
                func={() => sendPasswordReset(email)}
            >
                Send Reset Email
            </Button>
        </div>
    );
};

export default ForgotPassword;