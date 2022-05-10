import './App.css';
import PostRequest from './component/post';
import Navigation from './component/nav';
import axios from 'axios';
import {useEffect,useState} from "react";
import React from 'react'
import ReactDOM from 'react-dom'
function App() {
   const [contents, setContent] = useState([]);

   useEffect(()=>{
     async function getApi(){
       try {
         const contents=await axios.get("http://23.22.132.117");
         setContent(contents.data);
       } catch (error) {
         console.log(error);
       }
     }
     getApi();
   },[])
   
  return (
    <div className="App">
      <Navigation title="CURD On API"/>
      <PostRequest apidata={contents} />
    </div>
  );
}

export default App;
