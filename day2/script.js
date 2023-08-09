var yourname = document.getElementById("yourname"),
theirname = document.getElementById("theirname"),
calcBtn = document.querySelector("button"),
lovescoreis = document.getElementById("lovescoreis"),
lovescore = Math.random()*100,
loveinfo = document.getElementById("loveinfo"),
reload = document.getElementById("reload");
lovescore = Math.floor(lovescore) + 1;

function love(){
    function sl(ms){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
(async function(){
    var i = 0;
    while (i<lovescore){
        document.getElementById("score").innerHTML = i + "%";
        await sl(20);
        i++;
    }
});

calcBtn.addEventListener("click", function(e){
    lovescore = Math.random()*100;
    e.preventDefault();
    if (yourname.value == " " && theirname.value == " "){
        alert("You can't leave the fields empty");
    }
    if (yourname.value == " " ){
        alert("Enter your name");
    }

    if (theirname.value == " " ){
        alert("no bitches? 💀");
    }
})

const ranges = [
    { min: 0, max: 20, message: "Not very compatible 😔" },
    { min: 21, max: 50, message: "There's potential! 😊" },
    { min: 51, max: 80, message: "Looking good! 💖" },
    { min: 81, max: 100, message: "Made for each other! 💑" }
  ];

  let resultMessage = "";
  for (const range of ranges) {
    if (lovePercentage >= range.min && lovePercentage <= range.max) {
      resultMessage = range.message;
      break;
    }
  }

  return {
    percentage: lovescore,
    message: resultMessage
  };