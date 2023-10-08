// var multiBubble = function(){
// var clutter ="";

// for(let i=0; i<=119; i++){
// var rn = Math.floor(Math.random()*10)
// clutter = clutter + `<div class="bubble">${rn}</div>`
// document.querySelector('.bubble-wrapper').innerHTML = clutter;
// }
// }

// var timeDuration = 50;

// var timer = ()=>{
//     setInterval(function(){
//     if(timeDuration>0){

//         timeDuration--
//         document.querySelector('#timer').textContent = timeDuration;
//     }else{
//         clearInterval(timer)
//         document.querySelector('.bubble-wrapper').innerHTML = "GAME OVER"
//         document.querySelector('.bubble-wrapper').style.fontSize = "30px"
//     }
//     },1000)
// }

// var newR = 0;

//  var newhit = function(){
//  newR = Math.floor(Math.random()*10)
//  document.querySelector('#hit').textContent = newR;
// }

// var result = -10;

// var funcScore = function(){
//     result += 10;
//     document.querySelector('#score').textContent = result;

// }

// var target = function(){
//  document.querySelector('.bubble-wrapper')

// .addEventListener('click' , function(details){
//     var bubbleElem = Number(details.target.textContent);
//     if(bubbleElem === newR){
//         funcScore()
//         newhit()
//     }
// })
// }

// target()
// multiBubble()
// timer()
// newhit()
// funcScore()

var multiBubble = function () {
  var clutter = "";
  for (let i = 0; i <= 109; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    document.querySelector(".bubble-wrapper").innerHTML = clutter;
  }
};


var newNum = 0

var newhit = function () {
  var newNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = newNum;
};




var TimeLimit = 6;
var timer = setInterval(function () {
  if (TimeLimit > 0) {
    TimeLimit--
    document.querySelector("#timer").textContent = TimeLimit;
  }else{
    clearInterval(timer)
  }
}, 1000);



var result = 0;

var funcScore = function(){
    result += 10;
    document.querySelector('#score').textContent = result;

}


var target = function(){
document.querySelector(".bubble-wrapper");
 addEventListener('click' , function(details){
  var clickNum = Number(details.target.textContent);
  if(clickNum === newNum){
    funcScore()
    newhit()
  }   

})

    
}

target();
multiBubble();
funcScore();
newhit();

