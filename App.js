import React,{useState}from "react";
import"./App.css";
import"./App.scss";
  function App(){
    const[students]=
    useState(["Himabindu","Hameeda","Ankitha","Rishma"]);
    return(
      <div className="container">
        <h1 className="title">Student Roaster</h1>
        <ul className="student-list">
         {students.map((student,index)=>(
          <li key={index}className="student-item">
            {student}
          </li>
         ))}
        </ul>
        </div>
    );
  } 
export default App;