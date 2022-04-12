import './Container.css';

const Container = ({ children, height, width, color }) => {
    return (
        <div className="Container" style={{height: height, width: width}}>
            <div className="container-outer" style={{backgroundColor: color}}>
                <div className="container-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;