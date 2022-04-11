import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';

const Login = () => {
    return (
        <div className="Login">
            <TopBar text="Login"/>
            <Input label="username"/>
            <Input label="password" />
            <Button>Login</Button>
        </div>
    );
};

export default Login;