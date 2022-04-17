import './Button.css';

const Button = ({ color, children, darkText, func, disabled }) => {
    const doFunc = () => {
        setTimeout(func, 200);
    };

    return (
        <button className="Button" onClick={doFunc} disabled={disabled}>
            <div className="btn-push" style={{backgroundColor: color}}>
                <div className="btn-face" style={{backgroundColor: color}}>
                    <p 
                        className={"btn-text text" + (darkText ? "text-dark" : "")}
                    >
                        {children}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default Button;