import { CloudOutlined, FavoriteBorder, PersonOutline, Public } from '@mui/icons-material'
import React from 'react'
import CountUp from 'react-countup'; 
export const Counter = () => {
  return (
    <>
        <div className="hero counter">
            <div className="content grid3 grid4">
                <div className="box">
                    <i><CloudOutlined/></i>
                    <h1 className='heading'>
                        <CountUp enableScrollSpy duration={4} end={89}/>
                    </h1>
                    <h3>HAPPY CLIENTS</h3>
                </div>
                <div className="box">
                    <i><FavoriteBorder/></i>
                    <h1 className='heading'>
                        <CountUp enableScrollSpy duration={4} end={231} />
                    </h1>
                    <h3>PROJECTS COMPLEATED</h3>
                </div>
                <div className="box">
                    <i><Public/></i>
                    <h1 className='heading'>
                        <CountUp enableScrollSpy duration={4} end={108}/>
                    </h1>
                    <h3>FILES DOWNLOADED</h3>
                </div>
                <div className="box">
                    <i><PersonOutline/></i>
                    <h1 className='heading'>
                        <CountUp enableScrollSpy duration={4} end={1446}/>
                    </h1>
                    <h3>LIENS OF CODE</h3>
                </div>
            </div>
        </div>
    </>
  )
}
