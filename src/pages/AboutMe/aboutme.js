import React from 'react';
import styles from './aboutme.module.css'



const AboutMe = () =>  {
  
    //const [petTypes, setPetTypes] = useState([]);
    
    /*useEffect(() => {
      pf.animalData.types()
      .then(resp => {
        setPetTypes(resp.data.types);
      });
    }, []);*/
   
    return (
      <div>
          <h1 className={styles.h1}>About Me</h1>
      </div>
    );
}

export default AboutMe;