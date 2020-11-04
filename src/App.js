import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './App.module.css';
import FetchData from './Api/FetchData';


const App = () =>  {

  return (  
    <div className={classes.container}>
    
          <FetchData />
      
      </div>
      
  );
}

export default App;
