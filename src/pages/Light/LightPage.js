import NavMenu from "../../Components/NavMenu/NavMenu";
// import TopLightCange from "../../Components/TopLightCange/TopLightCange";
import image from '../../static/images/cells.png'
import './LightPage.css';
import { useState } from "react";

const LightPage = () => {

    const [cellGroup, setCellGroup] = useState(1);

    const handleCellClick = (group) => {
        setCellGroup(group)
    }

    return (
        <div>
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
                <div>02:00</div>
                <div>04:00</div>
                <div>06:00</div>
                <div>08:00</div>
                <div>10:00</div>
                <div>12:00</div>
                <div>14:00</div>
                <div>16:00</div>
                <div>18:00</div>
                <div>20:00</div>
                <div>22:00</div>
                <div>00:00</div>
            </div>
            

        </div>

        <div className='dispaly-flex-box'>
            <ul className="cells-holder">
                <li className="cells-item" onClick={() => handleCellClick(1)}>
                    <span className="cells-text">Ярус 1</span>
                </li>
                <li className="cells-item item-2" onClick={() => handleCellClick(2)}>
                    <span className="cells-text">Ярус 2</span>
                </li>
                <li className="cells-item item-2" onClick={() => handleCellClick(3)}>
                    <span className="cells-text">Ярус 3</span>
                </li>
                <li className="cells-item item-2" onClick={() => handleCellClick(4)}>
                    <span className="cells-text">Ярус 4</span>
                </li>
            </ul>
            <div className="image-light-holder">
                <img src={image} className="light_image"/>
            </div>
            <div className={`layer_${cellGroup}`} />
        </div>

        <NavMenu />

        </div>
        )
}

export default LightPage;