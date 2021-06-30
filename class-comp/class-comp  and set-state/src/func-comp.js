import React from 'react';
import {mess} from './utils';

const Blog=(prop)=>{
    mess(prop);
    return(
    <div className='blog'>
    <h1 className='heading'>{prop.title}</h1>
    <p>{prop.description}</p>
    <p className='like'>Likecount: {prop.Likecount}</p>
    <button className='button'onClick={prop.Like}><span className='span'>Like</span></button>
    </div>
   
    )
}

export default Blog;