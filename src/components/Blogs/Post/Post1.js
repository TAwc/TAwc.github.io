import React from 'react';

import style from './post.module.css'

const Post = () =>  {
  return (
    <div>
      <div className={style.container}>

        <div className={style.content}>
          <div className={style.title}>
            Creating a post creation system in pure react
          </div>

          <div className={style.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan sodales velit tincidunt convallis. Cras blandit viverra erat eu vehicula. Duis tincidunt, mauris ac 
            ornare scelerisque, neque augue semper tortor, ut tempus ligula dolor eu nisi. Maecenas posuere velit nulla, porttitor pretium dolor commodo sit amet. Fusce risus enim,
            tempor sit amet gravida a, aliquam ut leo. Duis laoreet lorem a nunc suscipit, quis maximus magna tincidunt.
            Aenean interdum lacinia augue a dignissim. Sed sollicitudin vel ex quis ullamcorper. Suspendisse malesuada massa sit amet neque vulputate tincidunt.
            Aenean sed ultrices tortor, in placerat purus. Suspendisse nec risus aliquet, lobortis nulla id, lacinia turpis. Nullam sed sapien vel est scelerisque dapibus quis eu 
            dolor. Nulla non mi in quam suscipit ultrices nec vel turpis. Vestibulum venenatis nec libero vel rhoncus. Nam et tortor metus. Cras quis erat sapien. Praesent varius 
            justo nunc, at iaculis nunc porta et. Morbi ut facilisis sem, non condimentum ligula.

            Cras quis semper lectus. Fusce tincidunt convallis tempus. 
            Pellentesque lobortis arcu erat, sit amet vestibulum risus placerat ac. 
            Curabitur eu quam ac tellus consectetur maximus et ut elit. In id ligula libero.
            Integer in velit arcu. Aliquam sit amet dolor ut leo euismod ultricies. Aliquam in velit vehicula, 
            consectetur nunc quis, ultricies tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Donec dui metus, vehicula vel odio quis, aliquam laoreet lorem. Aliquam metus lacus, malesuada vel massa ac, congue mattis dolor. Nunc ac cursus velit.
            Duis luctus felis eget diam imperdiet malesuada. Suspendisse sollicitudin porttitor blandit.

          </div>


          <p>I AM POST 1</p>


          <div className={style.para}>
            Sed tincidunt euismod lacus, at bibendum velit dignissim vel. Proin porta pharetra arcu eu pretium. Class aptent taciti sociosqu ad litora torquent per 
            conubia nostra, per inceptos himenaeos. Etiam sapien risus, finibus nec rutrum quis, porttitor nec ex. Morbi vel convallis quam. Aliquam sagittis mauris
            vel risus commodo dignissim. Etiam rhoncus justo lacinia ante dictum interdum. Donec imperdiet nisi nulla, eu venenatis nulla fermentum convallis. 
            Phasellus nunc ante, sodales ac tempus a, commodo quis justo. Vestibulum mi libero, pulvinar id congue ut, fringilla facilisis purus. Quisque neque est, 
            commodo eget ornare sit amet, luctus sed nunc. Praesent ac ante efficitur, commodo nibh in, scelerisque lectus.

            Cras euismod metus nec nisl euismod, eget luctus risus fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Fusce nec rhoncus risus. Praesent laoreet sodales laoreet. Praesent accumsan rutrum tincidunt. Orci varius natoque penatibus et 
            magnis dis parturient montes, nascetur ridiculus mus. Fusce quis venenatis turpis, sit amet imperdiet mauris. Mauris non facilisis lorem. 
            Integer rutrum felis nec lobortis interdum. Donec id tellus sed lorem laoreet gravida sed sit amet magna. Praesent posuere neque sed lacus 
            convallis porttitor. Suspendisse ultrices eget mauris ac feugiat. Pellentesque viverra maximus ante, et commodo justo sollicitudin ut. 
            Integer non mollis lectus. Proin efficitur consectetur justo.
          </div>
        </div>
      </div>
    </div>
  );
}   

export default Post;