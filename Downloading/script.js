var btn = document.querySelector(".start");
var p = document.querySelector(".p");
var para = document.querySelector(".para");
var process = document.querySelector(".status");

var count = 0;
var intervalId; 

btn.addEventListener("click", function () {
  if(count<100){
  intervalId = setInterval(() => {
    count++;
    p.innerHTML = count + "%";
    process.style.width = `${count}%`;

    if (count >= 100) {
      para.innerHTML = "Downloaded";
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 50);
}
});

