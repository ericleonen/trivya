import './StoreBanner.css';

const StoreBanner = ({ children, color }) => {
    return (
        <div className="StoreBanner" style={{backgroundColor: color}}>
            <h3 className="store-banner-title title">{children}</h3>
        </div>
    );
};

export default StoreBanner;