import React from 'react';
import reactLogo from '../../../images/reactLogo.png'
import indexjspng from '../../../images/Index.js.PNG'
import MapArray from '../../../images/MapArray.PNG'
import post_example from '../../../images/post_example.PNG'
import postArray from '../../../images/PostArray.PNG'
import PostloaderPNG from '../../../images/PostLoader.PNG';
import style from './post.module.css'

const Post = () =>  {
  return (
    <div>
      <div className={style.container}>

        <div className={style.content}>
          <div className={style.title}>
            Creating a post creation system in pure react
          </div>

          <img src={reactLogo} alt={"the react logo"} className={style.header_image}/>

          <div className={style.para}>
            If you’re like me with little money to spend and just using GitHub pages to host your website and want 
            a blog in react you’re going to run into a problem. The problem is, it’s basically impossible to do EFFICIENTLY. 
            While it is possible to do after many posts are created, due to how to react works the basic approach will cause 
            slow run times and create a rendering of elements users never see. The approach I created remedies these issues and 
            makes a tedious process that will slow your website down into something that efficiently serves HTML to the user. While 
            the system isn’t perfect and requires some grunt work, it won’t cause users to render HTML code that they will never see. 
          </div>

          <div className={style.para}>
            I have scavenged the internet for a better approach to this topic with these restrictions and have come up with little 
            to nothing as an answer. When tying this into google almost all responses require some kind of backend support such as 
            a second server to host a CMS or database. Based on the fact all my hosting was done through GitHub pages, this was not possible.
          </div>

          <div className={style.para}>
            The other option is to manually type in each new post creating a new react element that you have to manually 
            type in the URL for the redirect. on top of this, all your posts will be loaded at the same time meaning that 
            you will have all your posts load instead of the single post the user clicked on. Disgusting. 
          </div>

          <div className={style.para}>
          That’s where this solution comes into play. To start we need to know that can use the react-router usage of passing 
          params to create a file path as noted in the image below.
          </div>

          <img src={indexjspng} alt={"the index.js file"} className={style.header_image}/>

          <div className={style.para}>
            Here in the image above, we can send an “ID” (which we will later learn is the file name) to the child component. 
            The Next bit of code brings everything together.
          </div>

          <img src={PostloaderPNG} alt={"PostLoader Component"} className={style.header_image}/>


          <div className={style.para}>
            In the post loader component we can use the component render call a function to trigger a react.lazy to then take the file we have at 
            “./Post/ ...” + whatever file name we pass in and store the file data to a variable called “Post”. 
            Post is then evaluated and rendered out to the screen.
          </div>

          <div className={style.para}>
            Great! so that’s how it works on a technical level but what about the application of it? We can create a simple component 
            to now generate our blogs with a simple react map code over a simple array. An example of this could be as follows:
          </div>


          <img src={postArray} alt={"an array of details about the posts"} className={style.header_image}/>

          <div className={style.para}>
            Using this react map function we can then generate some simple output to layout the blog post. 
            The output can cssed and stylized to however you like. We are going to focus on the most important part: 
          </div>


          <img src={MapArray} alt={"using the map function to generate buttons for the post"} className={style.header_image}/>


          <div className={style.para}>
            A link to redirect the user to the post loader component with the name of the file that we want to render in the 
            “./Post/” directory as dictated by the post loader component. 
          </div>

          <div className={style.para}>
            Moving over to the blog post component we can see it looks like a simple normal react component almost in basic html:
          </div>

          <img src={post_example} alt={"An example of a post.js file"} className={style.header_image}/>

          <div className={style.para}>
            We can then use this file as a template for more blog posts in the future since there is really no work at all needed in this file. 
            The only thing we need for this file to render is its name.
          </div>

          <div className={style.para}>
            In conclusion, while this isn’t the most amazing solution to the problem at hand and I’m sure it can be 
            improved by someone who knows a bit more about react than me, It is a solution that doesn’t seem to exist elsewhere.
          </div>

          <div className={style.para}>
            All this code for this website can be found on my Github <a href="https://github.com/A-Waters/website">here</a> if you want to take a closer look at the implementation. 
          </div>

        </div>
      </div>
    </div>
  );
}   

export default Post;