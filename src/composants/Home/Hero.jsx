import React from 'react'
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="heroConatiner">
                <h4>HELLO I'M</h4>
                <h1 data-aos= "fade-right">
                <Typewriter
                    options={{
                        strings: ['KODJOGBE AUREL', 'WEB DESIGNER', 'UI/UX DESIGNER'],
                        autoStart: true,
                        loop: true,
                }}
                />
                </h1>
                <p data-aos='fade-left'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <button className='BtnprimaryColor'data-aos='fade-up-right' >Download CV</button>
            </div>
        </section>
    </>
  )
}
