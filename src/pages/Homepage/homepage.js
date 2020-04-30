import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css'



const Homepage = () =>  {
  
    //const [petTypes, setPetTypes] = useState([]);
    
    /*useEffect(() => {
      pf.animalData.types()
      .then(resp => {
        setPetTypes(resp.data.types);
      });
    }, []);*/
   
    return (
      <div>
          <h1 className={styles.h1}>Hello</h1>
      </div>
    );
}

export default Homepage;