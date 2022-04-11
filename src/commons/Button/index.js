import './Button.css';

const Button = ({ color, children }) => {
    return (
        <button className="Button">
            {children}
        </button>
    );
};

export default Button;