import "./ImageHolder.css";
import image from '../../static/images/room.png'

const ImageHolder = () => {
    return (
        <div className="img-holder">
            <img src={image} className="room_image"/>
        </div>
    )
}

export default ImageHolder;