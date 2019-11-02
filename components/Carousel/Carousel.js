/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const imgPaths = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg",
  "./assets/carousel/ta_hien.jpg",
  "https://images.unsplash.com/photo-1440694997168-8ae4033554c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
];

function createCarousel(imgSrcs){
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');
  const imgs = [];
  imgSrcs.forEach( () => imgs.push( document.createElement('img') ) ); //Create array with as many <img> elements as there are sources in imgSrcs.

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  carousel.appendChild(leftBtn);
  imgs.forEach( item => carousel.appendChild(item) );
  carousel.appendChild(rightBtn);

  imgs.forEach( (element, i) => {
    element.src = imgSrcs[i];
    if (i === 0) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  })

  leftBtn.addEventListener( 'click', e => changeImg(e) );
  rightBtn.addEventListener( 'click', e => changeImg(e) );

  function changeImg(event) {
    let currIndex;
    const lastIndex = imgs.length - 1;
    imgs.forEach( (item, index) => {
      if (item.style.display === 'block') {
        currIndex = index;
      };
    });
    imgs[currIndex].style.display = 'none';

    if (event.target.className === 'right-button') {
      if (currIndex === lastIndex) {
        imgs[0].style.display = 'block';
      }
      else {
        imgs[currIndex + 1].style.display = 'block';
      }
    }
    else if (event.target.className === 'left-button') {
      if (currIndex === 0) {
         imgs[lastIndex].style.display = 'block'
      }
      else {
        imgs[currIndex - 1].style.display = 'block';
      }
    }
  }

  return carousel;
};

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild( createCarousel(imgPaths) );

