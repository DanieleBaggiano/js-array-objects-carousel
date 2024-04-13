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
btnPrev.addEventListener("click", function() {
  array[active].classList.remove("active");
  active = (active === 0) ? array.length - 1 : active - 1;
  array[active].classList.add("active");
});

const btnNext = document.querySelector(".my-next");
btnNext.addEventListener("click", function() {
  array[active].classList.remove("active");
  active = (active === array.length - 1) ? 0 : active + 1;
  array[active].classList.add("active");
});
