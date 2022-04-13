import './Container.css';

const Container = ({ children, height, width, color, centerContent }) => {
    return (
        <div className="Container" style={{height: height, width: width}}>
            <div className="container-outer" style={{backgroundColor: color}}>
                <div className="container-inner" style={{alignItems: centerContent ? 'center' : 'flex-end'}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;