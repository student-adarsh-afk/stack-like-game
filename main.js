   let wrongnum=()=>{
    let randomNumber = Math.floor(Math.random() * 17);
    
    return(randomNumber)
   }

   const boxes=document.querySelectorAll( ".box");
   const randomNumber = wrongnum(); // Generate the random number once

   
   let redBoxClicked = false;
   let countdown=0;

  let  display=document.querySelector('.display');

    boxes.forEach((box, index)=>{


          box.addEventListener('click',()=>{
            if (redBoxClicked) {
                return; // If the red box has been clicked, do nothing
            }

               if(!box.classList.contains('clicked') 
               ){ if(index ===randomNumber){
                box.style.backgroundColor = "#d90429";
                box.innerText="lose ";
                display.style.backgroundColor = "#d90429";
                   display.innerText="!!current balance= $0";
                redBoxClicked = true; 
                
            }else{
                box.style.backgroundColor = "#38b000";
                box.innerText="+50";
                countdown +=50;
               
                display.innerText=`current balance = ${countdown}`;
            }
            box.classList.add('clicked');

               }})
    })
 


 
let clear=document.querySelector('.clear-btn');

clear.addEventListener('click',()=>{
    redBoxClicked = false; // Reset the flag
  let    randomNumber = wrongnum(); // Generate a new random number
  display.innerText="play to earn";
  display.style.backgroundColor = "#306bac";

    boxes.forEach(box => {
        box.style.backgroundColor = ""; // Remove the background color
          box.innerText="";
        box.classList.remove('clicked'); // Remove the clicked class
});
});


























