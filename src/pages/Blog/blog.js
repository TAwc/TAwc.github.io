import React from 'react';
//import styles from './Blog.module.css'

import Footer from '../../components/Footer/footer';
import Blog_Center from '../../components/Blogs/Blog/Blog_Center.js';

const Blog = () =>  {
    return (
      <div>
        <Footer/>
        <Blog_Center/>
      </div>
    );
}

export default Blog;