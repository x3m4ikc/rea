import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './TopLightChange.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const TopLightCange = () => {

    const labels = ['06:30', '06:40', '06:50', '07:00', '10:00', '13:00', '16:00', '19:00', '21:30', '21:40', '21:50', '22:00']

    const dataGraph = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0]

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
                ticks: {
                  color: '#60876F',
                }
            },
            y: {
              border:{dash: [3, 3]},
              grid: {
                tickColor: '',
                display: true,
                color: '#60876F',
              },
              ticks: {
                color: '#60876F',
              }
            }
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };

    const data = {
        labels: labels,
        datasets: [
          {
            label: '',
            lineTension: 0.7,
            data: dataGraph,
            fill: 'start',
            borderWidth: 1,
            borderColor: '#6fff8c',
            backgroundColor: (context) => {
                const ctx = context.chart.ctx
                const gradient = ctx.createLinearGradient(0, 0, 0, 180)
                gradient.addColorStop(0, 'rgba(70, 243, 87, 0.50)')
                gradient.addColorStop(1, 'rgba(175, 255, 183, 0)')
                return gradient
            },    
          },
        ],
      };

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
            <div className="day-graph">
                <Line options={options} data={data} className='graph'/>
            </div>
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