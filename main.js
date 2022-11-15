//on tarototxt clicked the menu has to appair

let tarotoTxt = document.querySelector(".tarototxt");

// tarotoTxt.addEventListener('click',()=>{
// document.querySelector(".options").style.opacity=0;
// })

tarotoTxt.addEventListener('click',()=>{
    document.querySelector(".options").classList.toggle("show");
})

