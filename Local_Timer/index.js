const clock = document.querySelector('#clock')

setInterval( (e) =>{
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);