import './TopBar.css'

const TopBar = () => {
    return (
            <div className="buttons-holder-topbar">
                <button className="button-topbar">
                    <span className="span-topbar">Датчик влажности 1</span>
                    <p className="sensor-value">65% ()</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик влажности 2</span>
                    <p className="sensor-value">67% ()</p>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Датчик уровня CO₂</span>
                    <p className="sensor-value">450 PPM ()</p>
                </button>
            </div>
    )
}

export default TopBar;