//Movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title=document.querySelector('.title');
const sneaker=document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes =document.querySelector(".sizes");
//Moving Animation Event
container.addEventListener('mousemove',(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/10;
    let yAxis=(window.innerHeight/2-e.pageY)/10;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card.addEventListener('mouseenter',(e)=>{
    card.style.transition="none";
    //Popout
    title.style.transform="translateZ(100px)";
    sneaker.style.transform="translateZ(90px) rotateZ(-45deg)";
    purchase.style.transform="translateZ(150px)";
    description.style.transform="translateZ(75px)";
    sizes.style.transform="translateZ(60px)";
    card.style.transition="all 0.1s ease-in";
});
//Animate Out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
});
