import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Tables';
import Maps from "./components/Maps"

const App =()=> {
  //useState in array for tables data
const [Data,setData]=useState([]);

  const onAdd=(data)=>{
      setData([...Data,data]);
  
  }
  return (
    <div className="App">
      <button type="button" onClick={()=>{alert("Home Clicked current location is Chennai")}} className="home">
        Home
      </button>
      <div className="mainbox">
        <Form add={onAdd} />
       <Table data={Data}/> 
      </div>
      <div className="map">
      <Maps map={Data}/>
      </div>
    </div>
  );
}

export default App;
