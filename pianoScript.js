var buttons = document.querySelectorAll("button");
for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function (){
    var buttonPressed = this.firstChild.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
  });
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(curkey){
  if(curkey=="2"||curkey=="3"||curkey=="5"||curkey=="6"||curkey=="7"){
    var activeKey = document.querySelector(".b"+curkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
      activeKey.classList.remove("pressed");
    },100)
  }
  else{
    var activeKey = document.querySelector("."+curkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
      activeKey.classList.remove("pressed");
    },100)
}
}

function makeSound(key){
  switch(key){
    case "q":
      var audio = new Audio('notes/C.mp3');
      audio.play();
      break;
    case "2":
      var audio = new Audio('notes/Db.mp3');
      audio.play();
      break;
    case "w":
      var audio = new Audio('notes/D.mp3');
      audio.play();
      break;
    case "3":
      var audio = new Audio('notes/Eb.mp3');
      audio.play();
      break;
    case "e":
      var audio = new Audio('notes/E.mp3');
      audio.play();
      break;
    case "r":
      var audio = new Audio('notes/F.mp3');
      audio.play();
      break;
    case "5":
      var audio = new Audio('notes/Gb.mp3');
      audio.play();
      break;
    case "t":
      var audio = new Audio('notes/G.mp3');
      audio.play();
      break;
    case "6":
      var audio = new Audio('notes/Ab.mp3');
      audio.play();
      break;
    case "y":
      var audio = new Audio('notes/A.mp3');
      audio.play();
      break;
    case "7":
      var audio = new Audio('notes/Bb.mp3');
      audio.play();
      break;
    case "u":
      var audio = new Audio('notes/B.mp3');
      audio.play();
      break;
    case "z":
      var audio = new Audio('notes/C.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('notes/Db.mp3');
      audio.play();
      break;
    case "x":
      var audio = new Audio('notes/D.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('notes/Eb.mp3');
      audio.play();
      break;
    case "c":
      var audio = new Audio('notes/E.mp3');
      audio.play();
      break;
    case "v":
      var audio = new Audio('notes/F.mp3');
      audio.play();
      break;
    case "g":
      var audio = new Audio('notes/Gb.mp3');
      audio.play();
      break;
    case "b":
      var audio = new Audio('notes/G.mp3');
      audio.play();
      break;
    case "h":
      var audio = new Audio('notes/Ab.mp3');
      audio.play();
      break;
    case "n":
      var audio = new Audio('notes/A.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('notes/Bb.mp3');
      audio.play();
      break;
    case "m":
      var audio = new Audio('notes/B.mp3');
      audio.play();
      break;
    default:
      console.log("Error");
      break;
  }
}
