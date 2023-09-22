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