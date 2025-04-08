var btn = document.querySelector("button")
var current = document.querySelector("h3")
var count = 1
btn.addEventListener("click",function(){
    if(count==1){
        current.style.color="green"
    current.innerHTML="Friendes"
    btn.innerHTML ="Remove"
    btn.style.backgroundColor="rgba(97, 123, 207, 0.664)"
   count = 0
    }else{
        current.style.color="red"
    current.innerHTML="Stranger"
    btn.innerHTML ="Add Friend"
       btn.style.backgroundColor="rgb(25, 78, 255)"
   count = 1
    }
})