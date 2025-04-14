var btn = document.querySelector('button')
var box = document.querySelector('#box')
var body = document.body

btn.addEventListener('click', function () {
    var x = Math.random() * 90
var y = Math.random() * 90
var rot = Math.random() * 360
    var img = document.createElement('img')
    img.setAttribute('src', 'img1.png')
    img.style.height = "200px"
    img.style.position = "absolute"
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.rotate = rot + 'deg'
   box.appendChild(img)
   
})

var card = document.querySelector('.section2 .card')
var love = document.querySelector('.section2 .card .love')

card.addEventListener("dblclick",function(){
    var int = setInterval(() => {
         love.style.height= "80px"
        love.style.opacity= "1"
    },10)
    setTimeout(() => {
        love.style.height= "10px"
        love.style.opacity= "0.5"
        clearInterval(int)
      }, 2000);
})

const nav = document.getElementById("navbar");
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            // Scrolling down
            nav.style.top = "-100px"; // Adjust this value based on your nav height
        } else {
            // Scrolling up
            nav.style.top = "0";
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });