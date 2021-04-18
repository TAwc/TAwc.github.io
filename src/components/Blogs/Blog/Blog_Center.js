import React, { Suspense, lazy } from "react";

//import styles from './Blog_Center.module.css'




const all_post = ['Post1.js','Post2.js']

const Blog_Center = () =>  {

  let Post1 = lazy(() => import(`../Post/Post1`) ) 


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {
          all_post.map((value) => 
            lazy(() => import(`../Post/${value}`))
          )
        }
      </Suspense>
    </div>
  );
}   

export default Blog_Center;