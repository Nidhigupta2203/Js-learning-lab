const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')
   const details = document.querySelector('#details')

   if(height<0 || isNaN(height) || height===' '){
      results.innerHTML = `Please give the valid height ${height}`;
   }
   else if(weight<0 || isNaN(weight) || weight===' '){
    results.innerHTML = `Please give the valid weight ${weight}`;
   }
   else{
     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       results.innerHTML = `<span> ${bmi} </span>`; 

       if(bmi<18.6){
        details.innerHTML = `<span> You are Under Weight </span>`;
       }
       else if(bmi>=18.6 && bmi<24.9){
        details.innerHTML = `<span> You have Normal Weight </span>`;
       }
       else if(bmi>=24.9) {
        details.innerHTML = `<span> You are Over Weight </span>`;
       }
   }
});