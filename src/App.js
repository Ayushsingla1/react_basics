import React, { useState } from "react";
import data from "./data.js"
import Tour from "./Parts/Tour.js"

const App = () => {

  const [tours,settours] = useState(data);
  function removeHandler(id){
    const newTours = tours.filter((tour) => tour.id!==id) ;
    settours(newTours);
  }
  if(tours.length===0){
    return(<div>
      <h2>No more Tours</h2>
      <button onClick={()=>settours(data)}>Refresh</button>
    </div>)
  }
  
  return(
    <div>
    <h2>Tour Guide</h2>
    <Tour locations= {tours} removeHandler={removeHandler}></Tour>
    <div className="App"></div>
    </div>
  );
};

export default App;
