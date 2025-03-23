import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import tick from '../../assets/whiteTick.png';
const Plan = () => {
  return (
    <div id="plan">
        <div className="blur"></div>
        <div className="plan-title">
          <span className="stroke-text">Ready to Start</span>
          <span>Your Journey</span>
          <span className="stroke-text">now withus</span>
        </div>

        <div className="plan-card-row">
            {plansData.map((data,index)=>(
                <div key={index} className="plan-card">
                    {data.icon}
                    <span className='plan-card-name'>{data.name}</span>
                    <span className='plan-card-price'>{`$ ${data.price} `}</span>
                    {data.features.map((feature,index)=>(
                        <div key={index} className="plan-feature">
                            <img src={tick} alt="" />
                            <p>{feature}</p>
                        </div>
                    ))}
                    <p>See more benefits {`->`}</p>
                    <button>Join now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plan