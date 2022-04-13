import Container from '../Container';

import './Input.css';

const Input = ({ label, value, setValue, placeholder }) => {
    return (
        <div className="Input">
            <label for={label} className="input-label text">{label}</label>
            <Container color="#E0E0E0" width="80%">
                <input 
                    value={value} 
                    placeholder={placeholder} 
                    id={label}
                    className="input-text text text-dark"
                />
            </Container>
        </div>
    );
};

export default Input;