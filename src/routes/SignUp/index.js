import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';

const SignUp = () => {
    return (
        <div className="SignUp">
            <TopBar text="Sign Up"/>
            <Input label="username"/>
            <Input label="email" />
            <Input label="password" />
            <Button>Sign Up</Button>
        </div>
    );
};

export default SignUp;