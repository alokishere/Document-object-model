let arr = [
    { team: 'CSK', primary: 'yellow', secondary: 'green' },
    { team: 'MI', primary: 'blue', secondary: 'gold' },
    { team: 'RCB', primary: 'red', secondary: 'black' },
    { team: 'KKR', primary: 'purple', secondary: 'gold' },
    { team: 'RR', primary: 'pink', secondary: 'blue' },
    { team: 'SRH', primary: 'orange', secondary: 'black' },
    { team: 'DC', primary: 'blue', secondary: 'red' },
    { team: 'PBKS', primary: 'red', secondary: 'silver' },
    { team: 'LSG', primary: 'lightblue', secondary: 'orange' },
    { team: 'GT', primary: 'darkblue', secondary: 'gold' }
  ];
  
//   var n = Math.floor(Math.random()*arr.length)

  var btn = document.querySelector('button')
  var box = document.querySelector('#box')
  var team = document.querySelector('#box h2')


  btn.addEventListener('click',function(){
   var n =  Math.floor(Math.random()*arr.length)
       box.style.backgroundColor = `${arr[n].primary}`
       team.style.color = `${arr[n].secondary}`
       team.innerHTML = `${arr[n].team}`
})

