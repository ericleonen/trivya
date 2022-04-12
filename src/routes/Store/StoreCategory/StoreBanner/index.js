import './StoreBanner.css';

const StoreBanner = ({ children, color }) => {
    return (
        <div className="StoreBanner">
            <h3>{children}</h3>
        </div>
    );
};

export default StoreBanner;