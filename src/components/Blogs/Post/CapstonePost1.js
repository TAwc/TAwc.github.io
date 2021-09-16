import React from 'react';
import image from '../../../images/plants_capstone.png'

import style from './post.module.css'

const Post = () =>  {

  // to be passed into share buttons
  const title = "Detecting Invasive plants using machine learning with image recognition and GPT-3"
  /* const share_URL = process.env.PUBLIC_URL
  const email_body = "Check out this cool project by Alexander Waters!"
  const facebook_quote = "Check out this cool project by Alexander Waters!"
  const hashtags = "#ComputerScience"
  const source = "Alexander Waters Website"
  const summary = "Creating a Invasive Plant Detection system using machine learning and GPT-3"
  */

  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            {title}
          </div>
          
          <img src={image} className={style.header_image} alt="Plants sitting on a windowsill"/>

          <div className={style.para}>
            In the fall of 2021, I was tasked with creating an image recognition system for invasive plants.
             While this isn't the most interesting project, the technology behind it is cutting edge. While only 
             being an undergrad who is mostly self-taught in the area of machine learning via mostly online 
             blog posts and videos, it's going to be an interesting journey with what I assume are many bumps in the road.
          </div>

          <div className={style.para}>
            "But Why plants?" I can hear you asking. In modern society, invasive species are an issue causing imbalances 
            in the eco-system leading to devastating effects. In this project, we can use plants as our 'testing ground'
            for more advanced applications of this technology and at the same time create a meaningful product that can 
            be used by a wide variety of people to better the planet. The project aims to create a mobile app that is easy 
            to use for users to be able to take a photo of a plant and determine if it is an invasive species.
          </div>


          <div className={style.para}>
            The basic idea of the project is to create a mobile app that anyone can use with ease after 
            a simple download from the android store allowing them to help stop or avoid invasive plants. 
            We can see this being used in the line of work of County Foresters or the US Forest Service in 
            Vermont along with general nature enthusiasts and depending on the route we take, for educational 
            purposes as well. 
          </div>


          <div className={style.para}>
            As it currently stands the project is going to use a convolutional neural network or CNN, 
            to determine the type of plant in the photo. If performance is lacking we will think about moving over 
            to a YOLOv5 network. After we determine the plant in the photo we then use GPT-3 to generate a 
            general description of the plant using its name and a simple prompt. In addition to this (while it is a stretch goal) 
            we will then use the image provided to generate a physical description of the plant. Preferably we will be using 
            my own convolutional neural network library for the first CNN but this is also a stretch goal.
          </div>


        </div>
      </div>
    </div>
  );
}   

export default Post;