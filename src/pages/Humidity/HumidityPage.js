import NavMenu from "../../Components/NavMenu/NavMenu";
import image from '../../static/images/room.png'
import LensIcon from '@mui/icons-material/Lens';
import './HumidityPage.css';

const HumidityPage = () => {
    return (
        <div>
            <TopBar />
            <ImageHolder />
            <NavMenu />
        </div>
    )
}

export default HumidityPage;

const TopBar = () => {
    return (
            <div className="buttons-holder-topbar">
                <button className="button-topbar">
                    <span className="span-topbar">Датчик влажности 1</span>
                    <p className="sensor-value">65%</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик влажности 2</span>
                    <p className="sensor-value">67%</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик уровня CO₂</span>
                    <p className="sensor-value">450 PPM</p>
                </button>
            </div>
    )
}

const ImageHolder = () => {
    return (
        <div>
            <div className="pointer_1"></div>
            <LensIcon className="pointer_icon1" sx={{ fontSize: 15 }}/>
            <div className="pointer_2"></div>
            <LensIcon className="pointer_icon2" sx={{ fontSize: 15 }}/>
            <div className="pointer_3"></div>
            <LensIcon className="pointer_icon3" sx={{ fontSize: 15 }}/>
        
            <div className="img-holder">
                <img src={image} className="room_image"/>
            </div>
        </div>
    )
}
