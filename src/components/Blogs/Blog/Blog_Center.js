import React, { Suspense, lazy } from "react";
import {NavLink} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

import style from './Blog_Center.module.css'




const Blog_Center = () =>  {

  const posts = [
    {title: "Creating a post creation system in pure react", description:'after quite a long time, i decided it was finally time to do something about it', link:'1', date:'12-19-2021', image_alt:'filler'},
    {title: "Creating a new biomass", description:'creating life as we know it', link:'1', date:'12-21-2021', image_alt:'filler'}, 
    {title: "Before the beginning there was nothing", description:'fuck this isnt working', link:'2', date:'12-24-2021', image_alt:'filler'},
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