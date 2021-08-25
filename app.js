const tasbeh_container = document.querySelector('.tasbeh-container');
const counterContainer = document.querySelector('.counter');
const image = document.querySelector('.image');
const clear = document.getElementById('clear');
const zikr_container = document.querySelector('.zikr-container');
const options = document.querySelector('.options');
const items = document.getElementsByTagName('p');

let counter = 0;
const audio = new Audio('audio2.mp3');
const vibrating = new Audio('vibrating.mp3');



const moveTasbeh = () =>{
    if(counter === 999){
        alert("You reached 999, and it will start from 0 again :)");
        counter = 0;
    }
    audio.play();
    counter++;
    if(counter % 33 === 0){
        vibrating.play();
    }
    counterContainer.innerHTML = counter;
    image.style.transform = `rotateZ(${counter * 15}deg)`;
}

tasbeh_container.addEventListener('click', ()=>{
    moveTasbeh();
});


clear.addEventListener('click', ()=>{
    counter = 0;
    counterContainer.innerHTML = counter;
})

zikr_container.addEventListener('click', ()=>{
    options.style.display = 'block';
})

const changeOption = clickedValue =>{
    zikr_container.innerHTML = clickedValue;
    options.style.display = 'none';
}




