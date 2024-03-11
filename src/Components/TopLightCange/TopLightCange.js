import './TopLightChange.css';

const TopLightCange = () => {
    return (
        <div className="change-holder">
            <div className="flex-row period-time">
                <span>|</span>
                <span>Восход</span>
                <span>|</span>
                <span>Световой день</span>
                <span>|</span>
                <span>Закат</span>
                <span>|</span>
            </div>
            <div classname="day-graph"></div>
            <div className="flex-row time"></div>
        </div>
    )
}

export default TopLightCange;