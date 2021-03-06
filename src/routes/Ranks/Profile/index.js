import Container from '../../../commons/Container';
import { getItemImg } from '../../../firebase/store';

import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ rank, username, trophies, avatar }) => {
    return (
        <div className="Profile">
            <Container color="#E0E0E0" centerContent>
                <div className="profile-section">
                    <p className="profile-rank text">{rank + 1}</p>
                    <img 
                        src={`/storeAssets/Avatars/` + getItemImg(avatar)}
                        className="profile-img" 
                    />
                    <p className="profile-username text">{username}</p>
                </div>
                <div className="profile-section">
                    <FontAwesomeIcon icon={faTrophy} className="trophy-icon icon icon-border" />
                    <p className="profile-trophies text">{trophies}</p>
                </div>
            </Container>
        </div>
    );
};

export default Profile;