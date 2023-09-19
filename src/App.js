import React, {useState} from "react";
import './App.css';
import data from "./data.json";



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div id="main_title">
     <h4>Your Favourite Game Of Thrones Character</h4>
        </div>
        <div className="searchInput_Container">
          
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.title}</h3>
                      <p className="House">House:{val.House}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;