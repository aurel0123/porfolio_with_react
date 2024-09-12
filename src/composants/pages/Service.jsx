import React from 'react'
import Heading from '../common/Heading'
import { BarChart, Code, CropRotate, PieChart, Settings, ViewInAr } from '@mui/icons-material'

export const Service = () => {
  return (
    <div>
        <section className="services">
            <div className="container-service flex-c ">
                <Heading title={"Services"}  />
               <div className="container_box grid3">
                    <div className="box">
                        <i><Settings/></i>
                        <h2>Creative Design</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
                    <div className="box">
                        <i><CropRotate/></i>
                        <h2>Clean Code</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
                    <div className="box">
                        <i><ViewInAr/></i>
                        <h2>Responsive Design</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
                    <div className="box">
                        <i><PieChart/></i>
                        <h2>Material UI</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
                    <div className="box">
                        <i><Code/></i>
                        <h2>Material UI Icons</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
                    <div className="box">
                        <i><BarChart/></i>
                        <h2>Awesome Support</h2>
                        <p>Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply</p>
                    </div>
               </div>
            </div>
        </section>
    </div>
  )
}
