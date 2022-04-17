import { useNavigate } from 'react-router';

import './BigButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BigButton = ({ children, icon, color, destination }) => {
    const navigate = useNavigate();

    const doFunc = () => {
        setTimeout(() => navigate(destination), 200);
    }

    return (
        <button className="BigButton" onClick={doFunc}>
            <div className="big-btn-push" style={{backgroundColor: color}}>
                <div className="big-btn-face" style={{backgroundColor: color}}>
                    <p className="big-btn-title title large" style={{color: color}}>{children}</p>
                    <div className="big-btn-icon">
                        <FontAwesomeIcon icon={icon} className="icon large" style={{color: color}}/>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default BigButton;