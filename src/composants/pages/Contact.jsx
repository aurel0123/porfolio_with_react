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
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Email' />
                            </div>
                            <input type="text" placeholder='Subject' />
                            <textarea name="" cols="30" rows="10" id=""></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className="left">
                        {
                            contact.map((items) =>(
                                <div className="box" key={items.id}>
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
