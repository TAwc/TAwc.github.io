import React from "react";
import {NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

import style from './Blog_Center.module.css'




const Blog_Center = () =>  {

  const posts = [
    {title: "Detecting Invasive plants using machine learning with image recognition and GPT-3", description:'A capstone project', link:'CapstonePost1', date:'9-16-2021', image_alt:'filler'},
    {title: "Creating a post creation system in pure react", description:'after quite a long time, i decided it was finally time to do something about it', link:'Post1', date:'2-19-2021', image_alt:'filler'},
  ]

    return (
      <div>
        <div className={style.post_center}>
          {posts.map((post) => {
            return <NavLink tag={Link} to={process.env.PUBLIC_URL + '/blog/post/' + post.link} key={post.title} className={style.link}>
              <Container>
                <Row>
                  <Col>
                    <div className={style.title}>
                      {post.title}
                    </div>
                  </Col>                  
                </Row>
                <Row>
                  <Col>
                    <div className={style.description}>
                      {post.description}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                      <div className={style.date}>
                        {post.date}
                      </div>
                  </Col>
                </Row>
                
              </Container>
                
            </NavLink>
          })}
        </div>
      </div>
  );
}   

export default Blog_Center;