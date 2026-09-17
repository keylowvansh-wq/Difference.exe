var score = 0;
var found = [false, false, false, false, false];
var msgs =[
"Find the 5 differences in this cozy room!",
"Good eye! Keep looking...",
"Hmm, that looks a bit dark in there.",
"Wait... is that a hand?",
"Why does the poster say that?",
"DON'T LOOK BEHIND YOU."
];
function updateUI(){
document.getElementById('score').innerText = score;
document.getElementById('msgBox').innerText = msgs[score];
document.getElementById('statusText').innerText = 'Processing...';
}
function checkHotspot(index){
if(found[index])
return;
found[index] = true;
score++;
updateUI();
}
document.getElementById('h1').addEventListener('click', function(){checkHotspot(0);});
document.getElementById('h2').addEventListener('click', function(){checkHotspot(1);});
document.getElementById('h3').addEventListener('click', function(){checkHotspot(2);});
document.getElementById('h4').addEventListener('click', function(){checkHotspot(3);});
document.getElementById('h5').addEventListener('click', function(){checkHotspot(4);});