import './Button.css';

const Button = ({ color, children, darkText, blendText, func }) => {
    return (
        <button className="Button" onClick={func}>
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