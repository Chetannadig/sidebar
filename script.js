const threeDots=document.querySelector('.threedots');
const container=document.querySelector('.container');
const cut=document.querySelector('.cut');
threeDots.addEventListener("click", ()=>{
container.style.width='50vw';
});

cut.addEventListener('click',()=>{
    container.style.width='0vw';
});