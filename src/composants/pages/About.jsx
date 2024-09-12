import React from 'react'
import man from '../donnee/images/man.png'; 
import Heading from '../common/Heading';

export const About = () => {
  return (
    <>
        <section className='About'>
            <div className="flex-sb container_about "> 
                <div className="flex left" data-aos='fade-down-left'>
                    <img src={man} alt="" />
                </div>
                <div className='right .space' data-aos='fade-down-right'>
                    <Heading title={"About Me"} />
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                    <p>magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                    <div className="flex bouttons">
                        <button>Download CV</button>
                        <button className='BtnprimaryColor'>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
