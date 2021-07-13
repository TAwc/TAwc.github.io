import React from 'react';
//import styles from './Blog.module.css'

import Footer from '../../components/Footer/footer';
import Blog_Center from '../../components/Blogs/Blog/Blog_Center.js';

const Blog = () =>  {
    return (
      <div>
        <Blog_Center/>
        <Footer/>
      </div>
    );
}

export default Blog;