const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
galleryRef.style.display = "flex";
galleryRef.style.gap = "10px";
galleryRef.style.listStyle = "None";
console.log(galleryRef);

const allImagesRef = images.forEach(({ url, alt }) => {
  const liRef = `<li><img src=${url} width="250px" height="100%" alt="${alt}"></li>`;
  galleryRef.insertAdjacentHTML("beforeend", liRef);
});
