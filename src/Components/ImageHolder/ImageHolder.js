import "./ImageHolder.css";
import image from '../../static/images/room.png'

const ImageHolder = () => {
    return (
        // Позишн релатив, внутри 3 дива и добавить позишн абсолют + бордер (ботом, лефт и тд)+ видт и хейгхт
        <div className="img-holder">
            <img src={image} className="room_image"/>
        </div>
    )
}

export default ImageHolder;