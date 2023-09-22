
let open = document.querySelector(".open")
let close = document.querySelector(".close")
let navList = document.querySelector(".link-wrap")

open.onclick=()=>{
 navList.style.left = "0%";
 open.style.display = "none";
 close.style.display = "block"
}
close.onclick=()=>{
 navList.style.left = "-100%";
 open.style.display = "block";
 close.style.display = "none"
}
let heroImg = ["social media file 7.jpg","social media file 6.jpg","social media file 8.jpg"]
let bg = document.querySelector(".flyers")
i = -1
// bg.innerHTML=`
//   <img src="./assets/images/social media file 7.jpg" alt="" class="flyer-img">
//   `
setInterval(() => {
 i++;
  if (i==3) {
   i=0
  }
  bg.innerHTML=`
  <img src="./assets/images/${heroImg[i]}" alt="" class="flyer-img">
  `
 

}, 5000);

let aboutImg = ["Social Media File 2.jpg","Social Media File 3.jpg","Social Media File 4.jpg"];
let aboutWrap = document.querySelector(".about-left");
b=0
setInterval(() => {
 b++;
  if (b==3) {
   b=0
  }
  aboutWrap.innerHTML=`
  <img src="./assets/images/${aboutImg[i]}" alt="" class="flyer-img">
  `

}, 2000);