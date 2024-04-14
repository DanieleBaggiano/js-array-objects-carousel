const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const array = [];
console.log(array);

const carouselImages = document.querySelector(".my-carousel-images");
console.log(carouselImages);

images.forEach(curCarousel => {

  // console.log(curCarousel);

  const contenitore = document.createElement("div");
  contenitore.className = "my-carousel-item"; // active
  carouselImages.append(contenitore);

  const immagine = document.createElement("img");
  immagine.className = "img-fluid";
  immagine.src = `./${curCarousel.image}`;
  immagine.alt = `${curCarousel.title} picture`;
  contenitore.append(immagine);

  const alessio = document.createElement("div");
  alessio.className = "item-description px-3";
  contenitore.append(alessio);

  const title = document.createElement("h2");
  title.textContent = `${curCarousel.title}`;
  alessio.append(title);

  const text = document.createElement("p");
  text.textContent = `${curCarousel.text}`;
  alessio.append(text);

  array.push(contenitore);
});

array[0].classList.add("active");
let active = 0;

const btnPrev = document.querySelector(".my-previous");
btnPrev.addEventListener("click", function () {
  array[active].classList.remove("active");
  active = (active === 0) ? array.length - 1 : active - 1;
  array[active].classList.add("active");
});

const btnNext = document.querySelector(".my-next");
btnNext.addEventListener("click", function () {
  array[active].classList.remove("active");
  active = (active === array.length - 1) ? 0 : active + 1;
  array[active].classList.add("active");
});

const scorrimento = setInterval(myFuction, 5000);

function myFuction() {
  array[active].classList.remove("active");
  active = (active === array.length - 1) ? 0 : active + 1;
  array[active].classList.add("active");
}

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");

img1.addEventListener("click", function () {
  img1.classList.add("active");
  
  array[0].classList.add("active");

  array[1].classList.remove("active");
  array[2].classList.remove("active");
  array[3].classList.remove("active");
  array[4].classList.remove("active");

  img2.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
})

img2.addEventListener("click", function () {
  img2.classList.add("active");
  
  array[1].classList.add("active");

  array[0].classList.remove("active");
  array[2].classList.remove("active");
  array[3].classList.remove("active");
  array[4].classList.remove("active");

  img1.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
})

img3.addEventListener("click", function () {
  img3.classList.add("active");
  
  array[2].classList.add("active");

  array[0].classList.remove("active");
  array[1].classList.remove("active");
  array[3].classList.remove("active");
  array[4].classList.remove("active");

  img1.classList.remove("active");
  img2.classList.remove("active");
  img4.classList.remove("active");
  img5.classList.remove("active");
})

img4.addEventListener("click", function () {
  img4.classList.add("active");
  
  array[3].classList.add("active");

  array[0].classList.remove("active");
  array[1].classList.remove("active");
  array[2].classList.remove("active");
  array[4].classList.remove("active");

  img1.classList.remove("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
  img5.classList.remove("active");
})

img5.addEventListener("click", function () {
  img5.classList.add("active");
  
  array[4].classList.add("active");

  array[0].classList.remove("active");
  array[1].classList.remove("active");
  array[2].classList.remove("active");
  array[3].classList.remove("active");

  img1.classList.remove("active");
  img2.classList.remove("active");
  img3.classList.remove("active");
  img4.classList.remove("active");
})
