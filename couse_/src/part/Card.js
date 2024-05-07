import React from 'react';
import './Cards.css'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
function Card({ element,likedcourses,setlikedcourses}){
    function likehandler(){
        if(likedcourses.includes(element.id)){
            setlikedcourses((courses) => courses.filter((course)=>(course!==element.id)));
            toast.warning("Like removed");
        }
        else{
            setlikedcourses((courses) => [...courses,element.id]);
            toast.success("Liked Successfully")
        }
    }
    return(
        <div className='cards'>
            <img src={element.image.url} alt={element.image.alt}></img>
            <div><button onClick={likehandler}>
                {likedcourses.includes(element.id) ? (<FcLike></FcLike>) : (<FcLikePlaceholder></FcLikePlaceholder>)}
                </button></div>
            <div>{element.title}</div>
            <div>{element.description}</div>
        </div>
    );
}

export default Card;