import React, { Suspense } from 'react';
import {useParams } from "react-router-dom";
import Footer from '../../components/Footer/footer';

function Postloader() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let Post = null
    
    function update(id_post){
      Post = React.lazy(() => import('./Post/'+id_post))
    }
  
    return (  
      <Suspense fallback={<div>Loading...</div>}>
        {update(id)}
        <Post/>
        <Footer/>
      </Suspense>
    );
  
}

export default Postloader