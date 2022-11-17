import React from 'react';
//import styles from './Blog.module.css'

import Footer from '../../components/Footer/footer';
import BlogCenter from '../../components/Blogs/Blog/Blog_Center.js';

const Blog = () =>  {
    return (
      <div>
        <BlogCenter/>
        <Footer/>
      </div>
    );
}

export default Blog;