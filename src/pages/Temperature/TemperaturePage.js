import NavMenu from "../../Components/NavMenu/NavMenu";
import image from '../../static/images/room.png'
import LensIcon from '@mui/icons-material/Lens';
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
            <LensIcon className="pointer_icon_1" sx={{ fontSize: 15 }}/>
            <div className="pointer2"></div>
            <LensIcon className="pointer_icon_2" sx={{ fontSize: 15 }}/>
            <div className="pointer3"></div>
            <LensIcon className="pointer_icon_3" sx={{ fontSize: 15 }}/>
            <div className="pointer4"></div>
            <LensIcon className="pointer_icon_4" sx={{ fontSize: 15 }}/>
            <div className="pointer5"></div>
            <LensIcon className="pointer_icon_5" sx={{ fontSize: 15 }}/>
            <div className="pointer6"></div>
            <LensIcon className="pointer_icon_6" sx={{ fontSize: 15 }}/>
            <div className="pointer7"></div>
            <LensIcon className="pointer_icon_7" sx={{ fontSize: 15 }}/>
            <div className="pointer8"></div>
            <LensIcon className="pointer_icon_8" sx={{ fontSize: 15 }}/>
        
            <div className="img-holder">
                <img src={image} className="room_image"/>
            </div>
        </div>
    )
}