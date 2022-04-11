import './Input.css';

const Input = ({ label, value, setValue, placeholder }) => {
    return (
        <div className="Input">
            <label for={label}>{label}</label>
            <input value={value} placeholder={placeholder} id={label}/>
        </div>
    );
};

export default Input;