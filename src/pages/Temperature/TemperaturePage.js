import NavMenu from "../../Components/NavMenu/NavMenu";
import image from '../../static/images/room.png'
import './TemperaturePage.css'

const TemperaturePage = () => {
    return (
        <div>
            <TopBar />
            <ImageHolder />
            <NavMenu />
        </div>
    )
}

export default TemperaturePage;


const TopBar = () => {
    return (
        <div className="buttons-holder-topbar">
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 1</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 2</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 3</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 4</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 5</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 6</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 7</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик 8</span>
                    <p className="sensor-value">25.0°С</p>
                </button>
            </div>
            
    )
}

const ImageHolder = () => {
    return (
        <div>
            <div className="pointer1"></div>
            <div className="pointer2"></div>
            <div className="pointer3"></div>
        
            <div className="img-holder">
                <img src={image} className="room_image"/>
            </div>
        </div>
    )
}