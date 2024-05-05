import { useState } from "react";

function Card({id,name,info,image,price,removeHandler}){

    const[imp,setimp] = useState(false);
    const content = imp ? info.substr(0,200) +"...Read More" : info + "...Show Less";
    function contentHandler(){
        setimp(!imp);
    }
    return(
        <div>
        <img src={image} alt="ERROR 404"></img>
        <div>${price}</div>
        <div>{name}</div>
        <div onClick={contentHandler}>{content}</div>
        <div><button onClick={()=>removeHandler(id)}>Not Intersted</button></div>
        </div>
    )
}
export default Card;