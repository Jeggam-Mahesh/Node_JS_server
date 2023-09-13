import React from "react";

import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
const GenericComp=(props)=>{
    console.log("category:",props.category);
    //api.......
    const [value,setValue]=useState('');
    useEffect(()=>{
        axios.get(`https://backend-server-react-blog-app.onrender.com/${props.category}`)
        .then((apidata)=>setValue(apidata.data))
        .catch((err)=>{
            console.log(err);
        })
    },[props.category])
    console.log(value);
    // const [id,heading,image,discription]=value;
    ////
    return(
        <div> 
          
        <div className="card_parent">
          <div className="card_container1"> 
             
          <h1 className="topic_heading">{props.category}</h1>
            { value&& value.map((item,index)=>{
              return (
              
                  <div className="display_card" key={index}>
                   <div className="card_image">
                      <Link to='/dynamicPage' state={{index:item.id,app_data:value}}> <img src={item.image} className="image_box" alt='not found' /></Link>
                  
                       </div> 
                   <div className="card_content">
                  <h1 >{item.heading}</h1>
                      {item.discription.slice(0,200)}</div>
                   </div>
                
                  
                 
              )
          })                 
         
          } 
          </div>
          <div className="post_container">
                  <h1 className="topic_heading">Top Posts</h1>
                        { value&& value.filter((item)=>item.id%2===0).map((item,index)=>{
                          return(
                              <div className=" post_disp_crd" key={index}>
                   <div className="post_image_div"> 
                   <Link to='/dynamicPage' state={{index:item.id,app_data:value}}>
                   <img className='post_image' src={item.image}  alt='not found'/>
                    </Link>
                    </div> 
                   <div className="post_content">
                  <h3>{item.heading}</h3>
                      {item.discription.slice(0,140)}</div>
                   </div>
                          )
                          
                      })
                  }
                   <div className="advertisement">
                   <img className='Adds' src='https://i.pinimg.com/originals/27/94/6a/27946a99657cddf0cbde79a7e4e6f51f.gif' alt="not found" />
          </div>
                 </div>
         
         </div>
          
      </div>
    )
}
export default GenericComp