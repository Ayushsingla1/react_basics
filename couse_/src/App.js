import './App.css';
import { filterData,apiUrl } from './data.js';
import {useEffect, useState } from 'react';
import Nav from './part/Nav.js';
import Bars from './part/Butto.js';
import Cards from './part/Cards.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './part/Spinner.js';

function App() {
  const [courses,setcourses] = useState('');
  const [loading,setloading] = useState(true);
  const [likedcourses,setlikedcourses] = useState([]);
  const [category,setcategory] = useState('All');

  async function loader(){
    setloading(true);
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      setcourses(data.data);
    }
    catch{
      toast.error("Network Issue");
    }
    setloading(false);
  }

  useEffect(()=>{
    loader();
  },[]);

  return (
    <div>
    <Nav/>
    <Bars filterData={filterData} category={category} setcategory={setcategory}></Bars>
    <div>
      {
        loading ? (<Spinner></Spinner>) : (<Cards courses={courses} likedcourses={likedcourses} setlikedcourses={setlikedcourses} category={category}></Cards>) 
      }
    </div>
    <div className="App"></div>
    </div>
    
  );
}
export default App;
