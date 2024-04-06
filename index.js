var count = 0

while(count<=6){
document.querySelectorAll(".drum")[count].addEventListener("click", function(){
    this.style.color = "green"

    console.log("hey hey")
    switch (this.innerHTML) {
        case "a":
            var audio = new Audio("this/tom-1.mp3")
            this.classList.add("damru")
            setTimeOut(setTimeOut, 100)
            break;
        case "s":
            var audio = new Audio("this/tom-2.mp3")
            break;
        case "d":
            var audio = new Audio("this/tom-3.mp3")
            break;
        case "f":
            var audio = new Audio("this/tom-4.mp3")
            break;
        case "j":
            var audio = new Audio("this/snare.mp3")
            break;
        case "k":
            var audio = new Audio("this/kick-bass.mp3")
            break;
        case "l":
            var audio = new Audio("this/crash.mp3")
            break;

        default:
            break;
    }
    audio.play()
    


})
count++
}

function setTimeOut(){
    for(i = 0; i<= 6; i++){
    document.querySelectorAll(".drum")[i].classList.remove("damru")
    }
}