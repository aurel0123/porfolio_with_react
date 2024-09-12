import React from 'react'
import {blog} from '../donnee/data'; 
import Heading from '../common/Heading';
export const Blog = () => {
  return (
    <>
        <section className="blog">
            <div className="container1 text-align">
                <Heading title={"Blog"}/>
                <div className="content grid3">
                   {
                     blog.map((items) => (
                        <div className="box" key={items.id} data-aos='flip-left'>
                            <div className="image" data-aos='fade-up'>
                                <img src={items.cover} alt="" data-aos='fade-down' />
                            </div>
                            <div className="text">
                                <h3 data-aos='fade-right'>{items.title}</h3>
                                <label data='fade-left'>
                                    By {items.author} {items.date}
                                </label>
                                <p data-aos='fade-up-right'>{items.desc}</p>
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </section>
    </>
  )
}
