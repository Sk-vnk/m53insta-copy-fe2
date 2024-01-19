import { useEffect, useState } from "react";
import './App.css';
// import { getAllUsers } from "./utils/fetch ";
import LogOrSign from './componants/LogOrSign/LogOrSign';
import PicContainer from "./componants/picContainer/PicContainer";
import { flushSync } from "react-dom";


const App = () => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const [pictures, setPictures] = useState([]);

  const fetchPics = async () => {

    const response = await fetch(`https://api.unsplash.com/photos?page=1&client_id=${process.env.REACT_APP_KEY}`);
   
    
   
    const data = await response.json();
    console.log(data);
    const picData = data.map((pic, index) => {
      return {
        id: pic.id,
        photographer: pic.user.name,
        location: pic.user.location,
        pics: {
         full: pic.urls.full,
         regular: pic.urls.regular,
         small: pic.urls.small,
         thumb: pic.urls.thumb,
        }
      };

  });
  console.log(picData);
  setPictures(picData);
  };

  useEffect(() => {
    fetchPics();
  }, []);


    return (
        <div className="App">
          <div className="component-container">
            <LogOrSign setLoggedIn={setLoggedIn}/>
          </div>
          <div className="component-container">
            <PicContainer pictures={pictures}/>
          </div>
          <div className="component-container">
            
          </div>
        </div>
      );
    };


  export default App;
