let btnfirst = document.querySelector(".btnfirst");
let start = document.querySelector(".start");
let weatherDiv = document.querySelector(".weather");
let forcast = document.querySelector("#forcastText div");

btnfirst.addEventListener("click",()=>{
    start.style.transform="translateX(-100vw)";
    start.style.transition="transform 0.3s ";
    setTimeout(()=>{
        weatherDiv.style.transform="translatey(0px)";
        weatherDiv.style.transition="transform 0.3s";
    },300);
})
function createStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        weatherDiv.appendChild(star);
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let delay = Math.random() * 3; 
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${delay}s`;
    }
}

createStars(150);
//automatic bg changer








