import React from 'react';
import styles from './future.module.css'





const Future = () =>  {

    const concepts = ["Sercuity and Exploits","Neural Networks", "Electrical Engineering", "Block chain", "Game Programming", "Image/Video Processing", "Compression",
                      "Audio Analyzation", "IOT", "Cryptography and Encryption", "Assembly"]

    let i = 0;
    return (
      <span>
        <div className = {styles.main}>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.titleText}>
                Whats Next?
              </p>
            </div>
            <div className={styles.summaryContainer}>
              <p className={styles.summaryText}>
                What am I planning on teaching myself in the next few years?
              </p>
            </div>
            <div className={styles.BodyContianer}>
              <ul>
                {concepts.map((concept) => {
                  i++;
                  return(
                    <li key={i} className={styles.item}>{concept}</li>
                  )
                })}

              </ul>
            </div>
          </div>
        </div>
      </span>
    );
}

export default Future;
