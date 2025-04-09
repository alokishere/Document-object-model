var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")
var btn = document.querySelector("button")
btn.addEventListener("click",function(){
    let image1 = img1.getAttribute("src")
    let image2 = img2.getAttribute("src")
  img1.setAttribute("src",image2)
  img2.setAttribute("src",image1)
  
    
})