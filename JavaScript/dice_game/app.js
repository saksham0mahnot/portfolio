let dice = document.getElementById('dice');
let number = document.getElementById('number');
let audio = document.getElementById('audio');

roll = () =>{
    dice.classList.add('dice')
    number.innerText = '...'
    audio.play();

    setTimeout(()=>{
        let random = Math.floor(Math.random()*6)+1;
        dice.classList.remove('dice')
        number.innerText = random;
    },1200)
}