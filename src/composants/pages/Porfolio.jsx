import React, { useState } from 'react';
import { portfolio } from '../donnee/data'; 
import { Visibility } from '@mui/icons-material';
import Heading from '../common/Heading';

const allCategory = ["all", ... new Set(portfolio.map((item) => item.category ))];
 
export const Porfolio = () => {
    const [list, setList] = useState(portfolio);
    const [category, setCategory] = useState(allCategory);
    console.log(setCategory);

    const filteritems =  (category)=>{
        const newItems = portfolio.filter(item=> item.category === category); 
        setList(newItems); 
        if(category === "all"){
            setList(portfolio); 
            return
        }
    }
    return (
        <>
            <article>
                <div className="container1 text-align">
                    <Heading title={"Portfolio"}/>
                    <div className="catButton">
                       {
                        category.map((category) =>(
                            <button type="button" className="BtnprimaryColor" onClick={()=>filteritems(category)} data-aos ="zoom-out-down " key={category.id} >
                                {category}
                            </button>
                        ))
                       }
                    </div>
                    <div className="content-porfolio grid3">
                        {
                            list.map((item) => (
                                <div className="box" data-aos='fade-up' key={item.id}>
                                    <div className="image">
                                        <img src={item.cover} alt={item.title} />
                                    </div>
                                    <div className="overlay">
                                        <h3>{item.title}</h3>
                                        <span>{item.name}</span>
                                        <Visibility />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </article>
        </>
    );
}
