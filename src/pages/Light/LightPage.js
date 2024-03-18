// import LightCenter from "../../Components/LightCenter/LightCenter";
// import NavMenu from "../../Components/NavMenu/NavMenu";
// import TopLightCange from "../../Components/TopLightCange/TopLightCange";
import './LightPage.css';

const LightPage = () => {
    return (
        // <div className="first-box">
        //     <div className="box">
        //         <TopLightCange />
        //         <LightCenter />
        //         <NavMenu />
        //     </div>
        // </div>
        <div className="boxxx">
            <div className="box-header box-flex">
                <div className="zero"></div>
                <div className="dawn">Рассвет</div>
                <div className="light-day">Световой день</div>
                <div className="sunset">Закат</div>
                <div className="zero"></div>
            </div>
            <div className="box-lines">
                <div className="box-line box-flex">
                    <div className="zero"></div>
                    <div className="dawn"></div>
                    <div className="light-day"></div>
                    <div className="sunset">
                        <div></div>
                    </div>
                    <div className="zero"></div>
                </div>
                <div className="box-line box-flex">
                    <div className="zero"></div>
                    <div className="dawn"></div>
                    <div className="light-day">
                        <div></div>
                    </div>
                    <div className="sunset"></div>
                    <div className="zero"></div>
                </div>
                <div className="box-line box-flex">
                    <div className="zero"></div>
                    <div className="dawn">
                        <div></div>
                    </div>
                    <div className="light-day"></div>
                    <div className="sunset"></div>
                    <div className="zero"></div>
                </div>
            </div>

            <div className='box-time'>
                <div>00:00</div>
                <div>12:00</div>
                <div>00:00</div>
            </div>
            
        </div>
        )
}

export default LightPage;