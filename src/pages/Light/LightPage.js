import LightCenter from "../../Components/LightCenter/LightCenter";
import NavMenu from "../../Components/NavMenu/NavMenu";
import TopLightCange from "../../Components/TopLightCange/TopLightCange";
import './LightPage.css';

const LightPage = () => {
    return (
        <div className="first-box">
            <div className="box">
                <TopLightCange />
                <LightCenter />
                <NavMenu />
            </div>
        </div>
    )
}

export default LightPage;