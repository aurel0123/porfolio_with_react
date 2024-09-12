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
                        <div className="box" key={items.id}>
                            <div className="image">
                                <img src={items.cover} alt="" />
                            </div>
                            <div className="text">
                                <h3>{items.title}</h3>
                                <label >
                                    By {items.author} {items.date}
                                </label>
                                <p>{items.desc}</p>
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
