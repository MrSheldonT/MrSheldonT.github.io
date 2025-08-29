
function updateClockTicker(){
    document.getElementById("ticker-text").textContent = new Date().toLocaleString();
}

function createInteractiveImage(){
    const img = document.createElement("img");
    img.src = "../assets/images/icons/button.png";
    img.style.position = 'absolute'; //

    img.addEventListener('click', ()=>{
        alert(":D");
    });
    moveRandomly(img);
    const audio = new Audio("../assets/audio/audio.mp3");

    img.addEventListener('mousemove', ()=>{
        audio.currentTime = 0 ;    
        audio.play().catch(error => console.log("No funcionó: ", error));        
        moveRandomly(img);
    });

    document.getElementById("interactiveImageContainer").appendChild(img);
}

function moveRandomly(img){
    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    img.style.left = Math.random() * ancho + "px";
    img.style.top = Math.random() * alto + "px";
    //img.opacity = Math.random() * 100;


    const size = Math.floor(Math.random() * 100) ;

    img.width = size ;   
    img.height = size;


}

function init(){
    updateClockTicker()
    setInterval(updateClockTicker, 1000);
    createInteractiveImage();
    console.log(":DD");
}
