import './TopLightChange.css';

const TopLightCange = () => {
    return (
        <div className="change-holder">
            <div className="period-time">
                <ul className='flex-row period'>
                    <li className="time-point">
                        <span>|</span>
                    </li>
                    <li className="time-point">
                        <span>Рассвет</span>
                    </li>
                    <li className="time-point">
                        <span>|</span>
                    </li>
                    <li className="time-point">
                        <span>Световой день</span>
                    </li>
                    <li className="time-point">
                        <span>|</span>
                    </li>
                    <li className="time-point">
                        <span>Закат</span>
                    </li>
                    <li className="time-point">
                        <span>|</span>
                    </li>
                </ul>
            </div>
            <div classname="day-graph"></div>
            <div className="time">
                <ul className='flex-row time-period'>
                    <li className='time-point'>
                        <span>00:00</span>
                    </li>
                    <li className='time-point'>
                        <span>02:30</span>
                    </li>
                    <li className='time-point'>
                        <span>02:40</span>
                    </li>
                    <li className='time-point'>
                        <span>03:00</span>
                    </li>
                    <li className='time-point'>
                        <span>06:00</span>
                    </li>
                    <li className='time-point'>
                        <span>09:00</span>
                    </li>
                    <li className='time-point'>
                        <span>12:00</span>
                    </li>
                    <li className='time-point'>
                        <span>15:00</span>
                    </li>
                    <li className='time-point'>
                        <span>18:00</span>
                    </li>
                    <li className='time-point'>
                        <span>21:00</span>
                    </li>
                    <li className='time-point'>
                        <span>22:00</span>
                    </li>
                    <li className='time-point'>
                        <span>22:10</span>
                    </li>
                    <li className='time-point'>
                        <span>22:20</span>
                    </li>
                    <li className='time-point'>
                        <span>22:30</span>
                    </li>
                    <li className='time-point'>
                        <span>00:00</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopLightCange;