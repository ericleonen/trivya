import './BigButton.css';

const BigButton = ({ children, icon, color }) => {
    return (
        <button className="BigButton">
            {children}
        </button>
    );
};

export default BigButton;