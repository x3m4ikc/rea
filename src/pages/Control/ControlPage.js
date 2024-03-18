import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NavMenu from "../../Components/NavMenu/NavMenu";
import React from 'react';


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
    <div className='buttons-holder-topbar'>
      <span className="text">Концентрация СО2 и интервал подачи</span>
    </div>
  )
}
