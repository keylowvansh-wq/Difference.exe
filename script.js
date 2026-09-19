var score = 0;
var found = [false, false, false, false, false];
var isDead = false;
var s1 = new Audio('assets/sfx_click.mp3');
var s2 = new Audio('assets/sfx_creak.mp3');
var s3 = new Audio('assets/sfx_heartbeat.mp3');
var s4 = new Audio('assets/sfx_glitch.mp3');
var s5 = new Audio('assets/sfx_scream.mp3');
var msgs =[
"Find the 5 differences in this cozy room!",
"Good eye! Keep looking...",
"Hmm, that looks a bit dark in there.",
"Wait... is that a hand?",
"Why does the poster say that?",
"DON'T LOOK BEHIND YOU."
];
function playSnd(snd){
snd.currentTime = 0;
snd.volume = 0.6;
snd.play().catch(function(e) {});
}
function updateUI(){
document.getElementById('score').innerText = score;
document.getElementById('msgBox').innerText = msgs[score];
document.getElementById('statusText').innerText = 'Processing...';
if(score >= 3){
document.body.classList.add('corrupted');
document.getElementById('titleBar').classList.add('corrupted');
s3.loop = true;
playSnd(s3);
 }
} 
function checkHotspot(index){
if(isDead || found[index])
return;
found[index] = true;
score++;
if(index === 0){
document.getElementById('winGlass').style.background = '#000';
document.getElementById('scaryEyes').style.display = 'block';
playSnd(s2);
}
else if(index === 1){
document.getElementById('closetDoor').style.transform = 'scaleX(0.8)';
document.getElementById('closetDark').style.display = 'block';
playSnd(s2);
}
else if(index === 2){
document.getElementById('bedHand').style.display = 'block';
playSnd(s1);
}
else if(index === 3){
document.getElementById('poster').style.background = '#000';
document.getElementById('poster').style.color = '#ff0000';
document.getElementById('posterText').innerText = 'RUN';
playSnd(s4);
}
else if(index === 4){
document.getElementById('doorShadow').style.display = 'block';
playSnd(s4);
}
updateUI();
if(score >= 5){
triggerEnd();
 }
}
function triggerEnd(){
isDead = true;
document.getElementById('statusText').innerText = 'FATAL ERROR';
if(s3){
s3.pause();
s3.currentTime = 0;
}
setTimeout(function(){
document.getElementById('jumpscare').style.display = 'flex';
playSnd(s5);
setTimeout(function(){
document.body.innerHTML = '';
document.body.style.background = '#000';
 }, 2000);
  }, 1500);
}
document.getElementById('h1').addEventListener('click', function(){checkHotspot(0);});
document.getElementById('h2').addEventListener('click', function(){checkHotspot(1);});
document.getElementById('h3').addEventListener('click', function(){checkHotspot(2);});
document.getElementById('h4').addEventListener('click', function(){checkHotspot(3);});
document.getElementById('h5').addEventListener('click', function(){checkHotspot(4);});
