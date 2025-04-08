
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")
var  box = document.querySelector("#box")
btn.addEventListener("click",function(){
  var c1 = Math.floor(Math.random()*256)
  var c2 = Math.floor(Math.random()*256)
  var c3 = Math.floor(Math.random()*256)
    box.style.backgroundColor= `rgb(${c1},${c2},${c3})`
    h1.style.color= `rgb(${c1},${c2},${c3})`
})