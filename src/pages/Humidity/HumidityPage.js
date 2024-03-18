import ImageHolder from "../../Components/ImageHolder/ImageHolder";
import NavMenu from "../../Components/NavMenu/NavMenu";
import TopBar from "../../Components/TopBar/TopBar";
import './HumidityPage.css';

const HumidityPage = () => {
    return (
        <div>
            <TopBar />
            <ImageHolder />
            <div className="space" />
            <NavMenu />
        </div>
    )
}

export default HumidityPage;