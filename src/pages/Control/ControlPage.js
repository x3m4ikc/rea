import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NavMenu from "../../Components/NavMenu/NavMenu";
import React from 'react';
import './ControlPage.css'


const ControlPage = () => {
    return (
        <div>
            <TopLayer />
            <MiddleLayer />
            <NavMenu />
        </div>
    )
}

export default ControlPage;

const TopLayer = () => {
  return (
    <div>
      <span className="text">Параметры воздуха</span>
      <div className="buttons-holder-topbar">
                <button className="button-topbar">
                    <span className="span-topbar">Температура дневная</span>
                    <div>
                      <RemoveOutlinedIcon />
                      <span>25.0°С</span>
                      <AddOutlinedIcon />
                    </div>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Температура ночная</span>
                    <div>
                      <RemoveOutlinedIcon />
                      <span>25.0°С</span>
                      <AddOutlinedIcon />
                    </div>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Влажность</span>
                    <div>
                      <RemoveOutlinedIcon />
                      <span>65%</span>
                      <AddOutlinedIcon />
                    </div>
                </button>
            </div>
    </div>
  )
}

const MiddleLayer = () => {
  return (
    <div className='box-middle'>
      <span className="text">Концентрация СО2 и интервал подачи</span>

      <div className='flex-box'>
        <div className='flex-box-column'>
          <RemoveOutlinedIcon />
          <div className='flex-box-inside'>
          <span className="text">850 PPM</span>
          <span className="text">Требуемый уровень</span>
          </div>
          <AddOutlinedIcon />
        </div>

        <div>
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

        <div>
          <RemoveOutlinedIcon />
          <div>
            <span className="text">02:30</span>
            <span className="text">Начало подачи</span>
          </div>
          <AddOutlinedIcon />

          <RemoveOutlinedIcon />
          <div>
            <span className="text">14:00</span>
            <span className="text">Окончание подачи</span>
          </div>
          <AddOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
