import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';

const SignUp = () => {
    return (
        <div className="SignUp view">
            <TopBar text="Sign Up" showBackArrow/>
            <div className="input-fields">
                <Input label="username"/>
                <Input label="email" />
                <Input label="password" />
            </div>
            <Button color="#92D35B" darkText>Sign Up</Button>
        </div>
    );
};

export default SignUp;