import React from 'react'
import Heading from '../common/Heading'
import {contact} from '../donnee/data'


export const Contact = () => {
  return (
    <>
        <section className="contact">
            <div className="container1 ">
                <h2 className='text-align'>
                    <Heading title={"Contact"}/>
                </h2>
                <div className="content flex-sb">
                    <div className="right">
                        <form >
                            <div className="flex space">
                                <input type="text" placeholder='Name' data-aos='flip-left' />
                                <input type="text" placeholder='Email' data-aos='flip-right'  />
                            </div>
                            <input type="text" placeholder='Subject' data-aos='flip-up'/>
                            <textarea name="" cols="30" rows="10" id="" data-aos='flip-down'></textarea>
                            <button data-aos='zoom-in-up'>Submit</button>
                        </form>
                    </div>
                    <div className="left">
                        {
                            contact.map((items) =>(
                                <div className="box" key={items.id} data-aos='zoom-in'>
                                    <i>{items.icon}</i>
                                    <p>{items.text1}</p>
                                    <p>{items.text2}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
