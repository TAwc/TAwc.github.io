import React from 'react';
import image from '../../../images/plants_capstone.png'

import style from './post.module.css'

const Post = () =>  {

  // to be passed into share buttons
  const title = "Detecting Invasive plants using machine learning with image recognition and GPT-3"
  const share_URL = process.env.PUBLIC_URL
  const email_body = "Check out this cool project by Alexander Waters!"
  const facebook_quote = "Check out this cool project by Alexander Waters!"
  const hashtags = "#ComputerScience"
  const source = "Alexander Waters Website"
  const summary = "Creating a Invasive Plant Detection system using machine learning and GPT-3"


  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            {title}
          </div>
          
          <img src={image} className={style.header_image} alt="Plants sitting on a windowsill"/>

          <div className={style.para}>
            In the fall of 2021 I was tasked with creating an image recognition system for invasive plants. While this isn't Most interesting project
            I have worked on the technology behind it was cutting edge.  While only being an undergrad who is mostly self taught in the area of machine learning via mostly online blog post and 
            videos, its going to be an interesting journey with what I assume many bumps in the road.
          </div>

          <div className={style.para}>
            "But Why plants?" I can here you asking. In modern society invasive species 
            are an issue causing imbalances in the ecosystem leading to devastating effects. In this project we can use plants as our 'testing ground'
            for more advanced applications of this technology and at the same time create a meaning full product that can be used by a wide variety of people
            to better the planet. The project aims to create a mobile app that is easy to use for users to be able to take a photo of a plant and determine if it 
            is an invasive species.
          </div>


          <div className={style.para}>
            As it currently stands, the project is going to use a 
          </div>


        </div>
      </div>
    </div>
  );
}   

export default Post;