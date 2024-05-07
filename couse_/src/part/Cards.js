import React from 'react';
import Card from './Card'
import './Cards.css'

function Cards({courses , likedcourses , setlikedcourses ,category}){
    let arr=[];
    if(category==="All"){
        Object.values(courses).forEach((element)=> {
            element.forEach((item)=>{
                arr.push(item);
            })
        });
    }
    else{
        arr=courses[category];
    }
    return(
        <div className='cards'>
            {arr.map((element)=>{
                return (<Card element={element} likedcourses={likedcourses} setlikedcourses={setlikedcourses}></Card>)
            })}
        </div>
    )
}

export default Cards;