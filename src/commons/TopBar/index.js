import './TopBar.css';

const TopBar = ({ text, showProfile, showTrophies, showCoins, showBackArrow, showExitX }) => {
    return (
        <div className="TopBar">
            <h2>{text}</h2>
        </div>
    );
};

export default TopBar;