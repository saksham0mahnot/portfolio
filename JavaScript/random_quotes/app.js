// console.log('Task 1');
// setTimeout(()=>{
//     console.log('Task 1.5');
// },2000)
// console.log('Task 2');
// console.log('Task 3');

// let startDownload = new Promise((resolve,reject)=>{
//     console.log('Download Starting'); 
//     setTimeout(()=>{
//         console.log('Downloading...');
//         reject()
//      },3000)
// })

// startDownload.then(()=>{
//     console.log('Download Complete');
// },()=>{
//     console.log('Error in Download')
// })

let para = document.getElementById('para');
let aut = document.getElementById('aut');

fetch('https://dummyjson.com/quotes/random').then((data)=>{
    return data.json();
}).then((data)=>{
    para.innerText= data.quote;
    aut.innerText= ('-'+data.author);
})

let target = document.querySelector("body");
let btn = document.querySelector("button");

let one = target.style.backgroundColor = `#${Math.floor(Math.random()*0xffffff).toString(16)}`
let two = btn.style.backgroundColor = one;

target.onload=()=>{
    one()
}

refresh=()=>{
    btn.addEventListener("click",()=>{
        window.location.reload();
    })
}