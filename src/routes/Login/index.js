import TopBar from '../../commons/TopBar';
import Input from '../../commons/Input';
import Button from '../../commons/Button';

const Login = () => {
    return (
        <div className="Login view">
            <TopBar text="Login" showBackArrow/>
            <div className="input-fields">
                <Input label="username"/>
                <Input label="password" />
            </div>
            <Button color="#92D35B" darkText>Login</Button>
        </div>
    );
};

export default Login;