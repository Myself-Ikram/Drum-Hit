//click
var totalButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<totalButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var currentButton = this.innerHTML;
        makeSound(currentButton);  
        makeAnimation(currentButton); 
        targetH1(currentButton); 
    });
}
//keypress
document.addEventListener("keydown",function(event){
    var keyValue = event.key;
    makeSound(keyValue);
    makeAnimation(keyValue);
    targetH1(keyValue);
});
function makeSound(e){
    switch (e) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
        default:
            alert("Wrong Input!!!");
            break;
    }
}
function makeAnimation(ani){
    var activeButton = document.querySelector("."+ani);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },300);
}
function targetH1(e){
    document.querySelector("h1").innerHTML = "";
    setTimeout(function(){
        document.querySelector("h1").innerHTML = "Hit Again!!!!!";
    },300);

}