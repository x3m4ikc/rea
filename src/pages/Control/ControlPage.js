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
            <BottomLayer />
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
    <div className='box-middle text'>
      <span className="text">Концентрация СО2 и интервал подачи</span>

      <div className='flex-box'>
        <div className='flex-box-column'>
          
          <div className='flex-container'>
            <RemoveOutlinedIcon className='change-icon' />
            <div className='flex-column-container'>
              <span>850 PPM</span>
              <span>Требуемый уровень</span>
            </div>
            <AddOutlinedIcon className='change-icon'/>
          </div>
          
        </div>

        <div className='time-points'>
          <div>00:00</div>
          <div>01:00</div>
          <div>02:00</div>
          <div>03:00</div>
          <div>04:00</div>
          <div>05:00</div>
          <div>06:00</div>
          <div>07:00</div>
          <div>08:00</div>
          <div>09:00</div>
          <div>10:00</div>
          <div>11:00</div>
          <div>12:00</div>
          <div>13:00</div>
          <div>14:00</div>
          <div>15:00</div>
          <div>16:00</div>
          <div>17:00</div>
          <div>18:00</div>
          <div>19:00</div>
          <div>20:00</div>
          <div>21:00</div>
          <div>22:00</div>
          <div>23:00</div>
          <div>00:00</div>
        </div>

        <div className='flex-container'>
        <div className='flex-container'>
          <RemoveOutlinedIcon className='change-icon'/>
          <div className='flex-column-container'>
            <span>02:30</span>
            <span>Начало подачи</span>
          </div>
          <AddOutlinedIcon className='change-icon'/>
        </div>
        <div className='flex-container'>
          <RemoveOutlinedIcon className='change-icon'/>
          <div className='flex-column-container'>
            <span>14:00</span>
            <span>Окончание подачи</span>
          </div>
          <AddOutlinedIcon className='change-icon'/>
        </div>
      
      </div>


      </div>
    </div>
  )
}

const BottomLayer = () => {
  return (
    <div>
      <span className="text">Параметры воздуха</span>
      <div className="buttons-holder-topbar">
                <button className="button-topbar">
                    <span className="span-topbar">Диапазон PH</span>
                    <div>
                      <RemoveOutlinedIcon />
                      <span>25.0°С</span>
                      <AddOutlinedIcon />
                    </div>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Диапазон EC</span>
                    <div>
                      <RemoveOutlinedIcon />
                      <span>25.0°С</span>
                      <AddOutlinedIcon />
                    </div>
                </button>
                <button className="button-topbar">
                    <span className="span-topbar">Минимальная допустимая</span>
                    <span className="span-topbar">температура раствора</span>
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
