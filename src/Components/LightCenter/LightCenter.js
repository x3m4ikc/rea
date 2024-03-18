import './LightCenter.css'
import image from '../../static/images/cells.png'

const LightCenter = () => {
    return (
        <div className='dispaly-flex-box'>
            <ul className="cells-holder">
                <li className="cells-item">
                    <span className="cells-text">Ярус 1</span>
                </li>
                <li className="cells-item item-2">
                    <span className="cells-text">Ярус 1</span>
                </li>
                <li className="cells-item item-2">
                    <span className="cells-text">Ярус 1</span>
                </li>
                <li className="cells-item item-2">
                    <span className="cells-text">Ярус 1</span>
                </li>
            </ul>
            <div className="image-light-holder">
                <img src={image} className="light_image"/>
            </div>
            <div className='layer_1' />
            <div className='layer_2' />
            <div className='layer_3' />
            <div className='layer_4' />
        </div>
    )
}

export default LightCenter;