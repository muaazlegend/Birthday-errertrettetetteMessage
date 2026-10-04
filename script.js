<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#ff7eb6">
<title>Happy Birthday Rameen ❤️</title>

<style>
:root{
  --pink:#ff6fae;
  --pink2:#ffb7d7;
  --purple:#9b7bff;
}

*{
  box-sizing:border-box;
}

html,body{
  margin:0;
  width:100%;
  height:100%;
  font-family:system-ui,-apple-system,Segoe UI,sans-serif;
  background:#160f20;
  color:white;
  overflow:hidden;
}

.screen{
  position:fixed;
  inset:0;
  display:none;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:24px;
  overflow:hidden;
}

.screen.active{
  display:flex;
}

.screen::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 20% 20%,rgba(255,126,182,.25),transparent 30%),
    radial-gradient(circle at 80% 75%,rgba(155,123,255,.22),transparent 30%);
}

.content{
  position:relative;
  z-index:5;
  width:min(900px,100%);
  max-height:100%;
  overflow:auto;
  padding:20px;
}

h1{
  font-size:clamp(2.2rem,7vw,5rem);
  margin:.2em 0;
  text-shadow:0 8px 30px rgba(255,90,160,.35);
}

h2{
  font-size:clamp(1.6rem,4vw,3rem);
}

p{
  font-size:clamp(1rem,2vw,1.25rem);
  line-height:1.6;
}

.btn{
  border:0;
  border-radius:999px;
  padding:14px 28px;
  background:linear-gradient(135deg,var(--pink),var(--purple));
  color:white;
  font-weight:800;
  cursor:pointer;
  box-shadow:0 10px 30px rgba(0,0,0,.25);
  transition:.2s;
}

.btn:hover{
  transform:translateY(-2px) scale(1.02);
}

.btn:active{
  transform:scale(.98);
}

.hidden{
  display:none!important;
}

#treeCanvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
}

#messageLines{
  display:none;
  position:relative;
  z-index:5;
  margin:25px auto;
  max-width:700px;
}

#messageLines p{
  opacity:0;
  transform:translateY(12px);
  transition:.7s;
  margin:12px 0;
}

#messageLines p.show{
  opacity:1;
  transform:none;
}

.glass{
  background:rgba(255,255,255,.14);
  border:1px solid rgba(255,255,255,.18);
  backdrop-filter:blur(14px);
  border-radius:28px;
  padding:26px;
  box-shadow:0 20px 60px rgba(0,0,0,.25);
}

.memory-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:16px;
  margin:20px 0;
}

.memory{
  padding:22px;
  border-radius:22px;
  background:rgba(255,255,255,.1);
}

.teddy-wrap{
  position:relative;
  width:min(280px,70vw);
  height:280px;
  margin:10px auto 25px;
  display:grid;
  place-items:center;
  cursor:pointer;
  user-select:none;
}

.teddy{
  font-size:150px;
  filter:drop-shadow(0 15px 25px rgba(0,0,0,.25));
  animation:bob 2s ease-in-out infinite;
}

.heart{
  position:absolute;
  font-size:30px;
  animation:float 2.2s ease-in-out infinite;
}

.h1{
  top:20px;
  left:25px;
}

.h2{
  top:50px;
  right:20px;
  animation-delay:.5s;
}

.h3{
  bottom:45px;
  left:20px;
  animation-delay:1s;
}

@keyframes bob{
  50%{
    transform:translateY(-10px) rotate(2deg);
  }
}

@keyframes float{
  50%{
    transform:translateY(-18px) scale(1.15);
    opacity:.65;
  }
}

.photo-box{
  margin:20px auto;
  max-width:520px;
  min-height:250px;
  border-radius:24px;
  overflow:hidden;
  background:rgba(255,255,255,.08);
  display:grid;
  place-items:center;
  border:1px solid rgba(255,255,255,.16);
}

#girlPhoto{
  display:block;
  max-width:100%;
  max-height:55vh;
  object-fit:contain;
  border-radius:18px;
}

.placeholder{
  padding:50px 20px;
  color:#ffd7e8;
}

.controls{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  justify-content:center;
  margin:18px 0;
}

.file-label{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:12px 18px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.2);
  cursor:pointer;
}

.file-label input{
  display:none;
}

#confetti{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:20;
  overflow:hidden;
}

.confetti-piece{
  position:absolute;
  top:-40px;
  animation:fall linear forwards;
}

@keyframes fall{
  to{
    transform:translateY(110vh) rotate(720deg);
    opacity:0;
  }
}

.small{
  font-size:.9rem;
  opacity:.8;
}

.toast{
  position:fixed;
  left:50%;
  bottom:22px;
  transform:translateX(-50%);
  z-index:50;
  background:#241827;
  color:#fff;
  padding:10px 16px;
  border-radius:999px;
  display:none;
}

@media(max-width:600px){

  .content{
    padding:8px;
  }

  .glass{
    padding:18px;
  }

  .teddy-wrap{
    height:230px;
  }

  .teddy{
    font-size:120px;
  }
}
</style>
</head>

<body>

<!--
=========================================================
BIRTHDAY MUSIC
=========================================================

You can either:

1. Use the "Choose Birthday Music" button on the website.

OR

2. Put birthday.mp3 in the same GitHub folder and set:

const DEFAULT_MUSIC = "birthday.mp3";

=========================================================
-->

<audio id="birthdayMusic" loop preload="metadata"></audio>


<!-- ================= INTRO ================= -->

<section id="intro" class="screen active">

  <div class="content">

    <div class="glass">

      <div style="font-size:4rem">
        🎀
      </div>

      <h1>
        Happy Birthday
        <span class="recipient-name">Rameen</span>
        ❤️
      </h1>

      <p>
        A little surprise made especially for you.
      </p>

      <button id="startButton" class="btn">
        Start the Surprise ✨
      </button>

    </div>

  </div>

</section>


<!-- ================= TREE ================= -->

<section id="treeScreen" class="screen">

  <canvas id="treeCanvas"></canvas>

  <div
    class="content"
    style="pointer-events:none"
  >

    <div id="messageLines">

      <p>
        Today is all about you,
        <b>Rameen</b> 💗
      </p>

      <p>
        May your day be full of smiles,
        happiness and beautiful memories.
      </p>

      <p>
        There is one more little surprise waiting...
      </p>

    </div>

    <button
      id="continueButton"
      class="btn hidden"
      style="pointer-events:auto"
    >
      Continue 💕
    </button>

  </div>

</section>


<!-- ================= MEMORIES ================= -->

<section id="memories" class="screen">

  <div class="content">

    <div class="glass">

      <div style="font-size:3rem">
        🌷✨
      </div>

      <h2>
        For
        <span class="recipient-name">
          Rameen
        </span>
      </h2>

      <div class="memory-grid">

        <div class="memory">
          💖
          <br>
          <b>A special person</b>
          <br>
          <span class="small">
            Someone worth celebrating.
          </span>
        </div>

        <div class="memory">
          🌸
          <br>
          <b>Beautiful moments</b>
          <br>
          <span class="small">
            May there be many more.
          </span>
        </div>

        <div class="memory">
          🎂
          <br>
          <b>Birthday wishes</b>
          <br>
          <span class="small">
            Keep smiling today and always.
          </span>
        </div>

      </div>

      <button
        id="pokemonButton"
        class="btn"
      >
        One More Surprise 🧸
      </button>

    </div>

  </div>

</section>


<!-- ================= TEDDY ================= -->

<section id="pokemonScreen" class="screen">

  <div class="content">

    <div class="glass">

      <div id="teddyIntro">

        <h2>
          A little teddy has something
          for
          <span class="recipient-name">
            Rameen
          </span>
          🧸
        </h2>

        <p>
          Tap the teddy bear for the surprise.
        </p>

        <div
          id="teddyButton"
          class="teddy-wrap"
          role="button"
          tabindex="0"
          aria-label="Open teddy bear surprise"
        >

          <span class="heart h1">
            💗
          </span>

          <span class="heart h2">
            💕
          </span>

          <span class="heart h3">
            💖
          </span>

          <div class="teddy">
            🧸
          </div>

        </div>

      </div>


      <!-- ================= PHOTO REVEAL ================= -->

      <div
        id="photoReveal"
        class="hidden"
      >

        <h2>
          For you,
          <span class="recipient-name">
            Rameen
          </span>
          💕
        </h2>


        <div class="photo-box">

          <img
            id="girlPhoto"
            alt="Birthday photo"
            class="hidden"
          >

          <div
            id="photoPlaceholder"
            class="placeholder"
          >
            Choose a photo below to add it
            to the surprise 📸
          </div>

        </div>


        <div class="controls">

          <label class="file-label">

            📸 Choose Photo

            <input
              id="photoInput"
              type="file"
              accept="image/*"
            >

          </label>


          <label class="file-label">

            🎵 Choose Birthday Music

            <input
              id="musicInput"
              type="file"
              accept="audio/*"
            >

          </label>

        </div>


        <p class="small">

          You can select any photo and any
          birthday song from your computer.

        </p>


        <button
          id="finalButton"
          class="btn"
        >
          Finish the Surprise 🎉
        </button>

      </div>

    </div>

  </div>

</section>


<!-- ================= FINAL ================= -->

<section id="finalScreen" class="screen">

  <div id="confetti"></div>

  <div class="content">

    <div class="glass">

      <div style="font-size:4rem">
        🎂💖🎉
      </div>

      <h1>
        Happy Birthday
        <span id="finalName">
          Rameen
        </span>
        !
      </h1>

      <p>
        Wishing you a day as lovely and
        special as you are.
      </p>

      <p>
        With lots of love, smiles and
        birthday magic. 🧸💕
      </p>

      <button
        id="replayButton"
        class="btn"
      >
        Replay 🔄
      </button>

    </div>

  </div>

</section>


<div id="toast" class="toast"></div>


<script>

"use strict";


/* =========================================================
   EASY SETTINGS
========================================================= */


const RECIPIENT_NAME = "Rameen";


/*
=========================================================
OPTIONAL DEFAULT PHOTO

If you put:

rameen.jpg

inside the same GitHub folder as index.html,

change this to:

const DEFAULT_PHOTO = "rameen.jpg";

You can also use:

const DEFAULT_PHOTO = "images/rameen.jpg";

=========================================================
*/

const DEFAULT_PHOTO = "";


/*
=========================================================
OPTIONAL DEFAULT MUSIC

If you put:

birthday.mp3

inside the same GitHub folder as index.html,

change this to:

const DEFAULT_MUSIC = "birthday.mp3";

Or:

const DEFAULT_MUSIC = "music/birthday.mp3";

=========================================================
*/

const DEFAULT_MUSIC = "";



/* =========================================================
   ELEMENTS
========================================================= */


const $ = id =>
  document.getElementById(id);


const screens =
  [...document.querySelectorAll(".screen")];


const intro =
  $("intro");

const treeScreen =
  $("treeScreen");

const memories =
  $("memories");

const teddyScreen =
  $("pokemonScreen");

const finalScreen =
  $("finalScreen");


const startButton =
  $("startButton");

const continueButton =
  $("continueButton");

const teddyButton =
  $("teddyButton");

const finalButton =
  $("finalButton");

const replayButton =
  $("replayButton");


const music =
  $("birthdayMusic");


const musicInput =
  $("musicInput");


const photoInput =
  $("photoInput");


const girlPhoto =
  $("girlPhoto");


const photoPlaceholder =
  $("photoPlaceholder");


const photoReveal =
  $("photoReveal");


const teddyIntro =
  $("teddyIntro");


const toast =
  $("toast");



let photoObjectURL = "";

let musicObjectURL = "";

let teddyOpened = false;



/* =========================================================
   NAME
========================================================= */


function setRecipientName(){

  document.title =
    `Happy Birthday ${RECIPIENT_NAME} ❤️`;

  document
    .querySelectorAll(".recipient-name")
    .forEach(element => {

      element.textContent =
        RECIPIENT_NAME;

    });


  $("finalName").textContent =
    RECIPIENT_NAME;

}


setRecipientName();



/* =========================================================
   SCREEN NAVIGATION
========================================================= */


function showScreen(screen){

  if(!screen){
    return;
  }


  screens.forEach(
    screenItem => {

      screenItem.classList.remove(
        "active"
      );

    }
  );


  screen.classList.add(
    "active"
  );

}



/* =========================================================
   TOAST
========================================================= */


function showToast(message){

  toast.textContent =
    message;

  toast.style.display =
    "block";


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () => {

        toast.style.display =
          "none";

      },
      2800
    );

}



/* =========================================================
   MUSIC
========================================================= */


async function startMusic(){

  if(
    !music ||
    !music.src
  ){

    return;

  }


  try{

    music.volume =
      0.45;

    await music.play();

  }

  catch(error){

    console.log(
      "Music needs another interaction.",
      error
    );

  }

}



/* Load default music */


function loadDefaultMusic(){

  if(!DEFAULT_MUSIC){
    return;
  }


  music.src =
    DEFAULT_MUSIC;

  music.load();

}


loadDefaultMusic();



/* User-selected music */


musicInput.addEventListener(
  "change",
  () => {

    const file =
      musicInput.files?.[0];


    if(!file){
      return;
    }


    if(
      !file.type.startsWith(
        "audio/"
      )
    ){

      showToast(
        "Please choose an audio file."
      );

      musicInput.value =
        "";

      return;

    }


    if(musicObjectURL){

      URL.revokeObjectURL(
        musicObjectURL
      );

    }


    musicObjectURL =
      URL.createObjectURL(
        file
      );


    music.src =
      musicObjectURL;


    music.load();


    startMusic();


    showToast(
      "Birthday music added 🎵"
    );

  }
);



/* =========================================================
   PHOTO
========================================================= */


function setPhotoSource(src){

  if(!src){
    return;
  }


  girlPhoto.src =
    src;


  girlPhoto.classList.remove(
    "hidden"
  );


  photoPlaceholder.classList.add(
    "hidden"
  );

}



function loadDefaultPhoto(){

  if(DEFAULT_PHOTO){

    setPhotoSource(
      DEFAULT_PHOTO
    );

  }

}


loadDefaultPhoto();



photoInput.addEventListener(
  "change",
  () => {

    const file =
      photoInput.files?.[0];


    if(!file){
      return;
    }


    if(
      !file.type.startsWith(
        "image/"
      )
    ){

      showToast(
        "Please choose an image file."
      );

      photoInput.value =
        "";

      return;

    }


    if(photoObjectURL){

      URL.revokeObjectURL(
        photoObjectURL
      );

    }


    photoObjectURL =
      URL.createObjectURL(
        file
      );


    setPhotoSource(
      photoObjectURL
    );


    showToast(
      "Photo added 📸"
    );

  }
);



/* =========================================================
   START BUTTON
========================================================= */


startButton.addEventListener(
  "click",
  () => {

    startMusic();


    showScreen(
      treeScreen
    );


    startTreeAnimation();

  }
);



/* =========================================================
   TREE
========================================================= */


const canvas =
  $("treeCanvas");


const ctx =
  canvas.getContext(
    "2d",
    {
      alpha:true
    }
  );


let width = 0;

let height = 0;

let dpr = 1;


let branches = [];

let hearts = [];

let particles = [];


let treeProgress = 0;

let treeStarted = false;

let treeMessageShown = false;



/* Canvas resize */


function resizeCanvas(){

  dpr =
    Math.min(
      window.devicePixelRatio || 1,
      2
    );


  width =
    window.innerWidth;


  height =
    window.innerHeight;


  canvas.width =
    Math.floor(
      width * dpr
    );


  canvas.height =
    Math.floor(
      height * dpr
    );


  canvas.style.width =
    `${width}px`;


  canvas.style.height =
    `${height}px`;


  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );


  if(treeStarted){

    createTree();

    createHearts();

  }

}



/* Create branch */


function createBranch(
  x,
  y,
  length,
  angle,
  thickness,
  depth
){

  if(
    depth <= 0 ||
    length < 3
  ){

    return;

  }


  const endX =
    x +
    Math.cos(angle) *
    length;


  const endY =
    y +
    Math.sin(angle) *
    length;


  branches.push({

    x1:x,

    y1:y,

    x2:endX,

    y2:endY,

    thickness:thickness,

    progress:0

  });


  const nextLength =
    length * 0.72;


  const spread =
    0.48;


  createBranch(
    endX,
    endY,
    nextLength,
    angle - spread,
    thickness * .68,
    depth - 1
  );


  createBranch(
    endX,
    endY,
    nextLength,
    angle + spread,
    thickness * .68,
    depth - 1
  );

}



/* Create tree */


function createTree(){

  branches = [];


  createBranch(
    width / 2,
    Math.min(
      height * .9,
      720
    ),
    height * .28,
    -Math.PI / 2,
    14,
    7
  );

}



/* Create hearts */


function createHearts(){

  hearts = [];


  branches.forEach(
    (branch,index) => {

      if(
        index % 2
      ){

        return;

      }


      const t =
        Math.random() *
        .77 +
        .1;


      hearts.push({

        x:
          branch.x1 +
          (branch.x2 -
           branch.x1) *
          t,

        y:
          branch.y1 +
          (branch.y2 -
           branch.y1) *
          t,

        size:
          Math.random() *
          5 +
          4,

        delay:
          Math.random() *
          .7,

        opacity:0

      });

    }
  );

}



/* Create particles */


function createParticles(){

  particles =
    Array.from(
      {
        length:120
      },
      () => ({

        x:
          Math.random() *
          width,

        y:
          Math.random() *
          height,

        size:
          Math.random() *
          2 +
          .5,

        speed:
          Math.random() *
          .4 +
          .1,

        opacity:
          Math.random() *
          .5 +
          .2

      })
    );

}



/* Draw heart */


function drawHeart(
  x,
  y,
  size,
  opacity
){

  ctx.save();


  ctx.translate(
    x,
    y
  );


  ctx.scale(
    size,
    size
  );


  ctx.beginPath();


  ctx.moveTo(
    0,
    .3
  );


  ctx.bezierCurveTo(
    -1.2,
    -.5,
    -.7,
    -1.5,
    0,
    -.8
  );


  ctx.bezierCurveTo(
    .7,
    -1.5,
    1.2,
    -.5,
    0,
    .3
  );


  ctx.closePath();


  ctx.fillStyle =
    `rgba(
      255,
      70,
      145,
      ${opacity}
    )`;


  ctx.shadowColor =
    "rgba(255,70,150,.9)";


  ctx.shadowBlur =
    12;


  ctx.fill();


  ctx.restore();

}



/* Draw particles */


function drawParticles(){

  particles.forEach(
    particle => {

      particle.y -=
        particle.speed;


      if(
        particle.y < -10
      ){

        particle.y =
          height + 10;

      }


      ctx.beginPath();


      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );


      ctx.fillStyle =
        `rgba(
          255,
          190,
          220,
          ${particle.opacity}
        )`;


      ctx.fill();

    }
  );

}



/* Draw tree */


function drawTree(){

  if(
    !treeScreen.classList.contains(
      "active"
    )
  ){

    return;

  }


  ctx.clearRect(
    0,
    0,
    width,
    height
  );


  drawParticles();


  const ground =
    ctx.createRadialGradient(
      width / 2,
      height * .9,
      0,
      width / 2,
      height * .9,
      300
    );


  ground.addColorStop(
    0,
    "rgba(255,60,150,.25)"
  );


  ground.addColorStop(
    1,
    "rgba(255,60,150,0)"
  );


  ctx.fillStyle =
    ground;


  ctx.fillRect(
    0,
    height * .72,
    width,
    height * .28
  );


  branches.forEach(
    (branch,index) => {

      branch.progress =
        Math.min(
          1,
          treeProgress -
          (
            index /
            Math.max(
              branches.length,
              1
            )
          ) *
          .3
        );


      if(
        branch.progress <= 0
      ){

        return;

      }


      const x =
        branch.x1 +
        (
          branch.x2 -
          branch.x1
        ) *
        branch.progress;


      const y =
        branch.y1 +
        (
          branch.y2 -
          branch.y1
        ) *
        branch.progress;


      ctx.beginPath();


      ctx.moveTo(
        branch.x1,
        branch.y1
      );


      ctx.lineTo(
        x,
        y
      );


      ctx.strokeStyle =
        "rgba(110,65,75,.95)";


      ctx.lineWidth =
        branch.thickness;


      ctx.lineCap =
        "round";


      ctx.stroke();

    }
  );


  hearts.forEach(
    heart => {

      if(
        treeProgress <
        heart.delay
      ){

        return;

      }


      heart.opacity =
        Math.min(
          1,
          heart.opacity +
          .025
        );


      const pulse =
        1 +
        Math.sin(
          Date.now() *
          .003 +
          heart.x
        ) *
        .08;


      drawHeart(
        heart.x,
        heart.y,
        heart.size *
        pulse,
        heart.opacity
      );

    }
  );


  if(treeStarted){

    treeProgress =
      Math.min(
        1.25,
        treeProgress +
        .0035
      );

  }


  requestAnimationFrame(
    drawTree
  );

}



/* Birthday message */


function showBirthdayMessage(){

  if(treeMessageShown){
    return;
  }


  treeMessageShown =
    true;


  const container =
    $("messageLines");


  container.style.display =
    "block";


  const lines =
    container.querySelectorAll(
      "p"
    );


  lines.forEach(
    (line,index) => {

      setTimeout(
        () => {

          line.classList.add(
            "show"
          );

        },
        index * 900
      );

    }
  );


  setTimeout(
    () => {

      continueButton.classList.remove(
        "hidden"
      );

    },
    lines.length *
    900 +
    700
  );

}



/* Start tree */


function startTreeAnimation(){

  if(treeStarted){
    return;
  }


  treeStarted =
    true;


  treeProgress =
    0;


  createTree();

  createHearts();

  createParticles();

  drawTree();


  setTimeout(
    showBirthdayMessage,
    4500
  );

}



window.addEventListener(
  "resize",
  resizeCanvas
);



/* =========================================================
   NAVIGATION
========================================================= */


continueButton.addEventListener(
  "click",
  () => {

    showScreen(
      memories
    );

  }
);


$("pokemonButton").addEventListener(
  "click",
  () => {

    showScreen(
      teddyScreen
    );

  }
);



/* =========================================================
   TEDDY BEAR
========================================================= */


function openTeddy(){

  if(teddyOpened){
    return;
  }


  teddyOpened =
    true;


  teddyButton.style.pointerEvents =
    "none";


  teddyButton.animate(
    [
      {
        transform:"scale(1)"
      },

      {
        transform:
          "scale(1.12) rotate(-4deg)"
      },

      {
        transform:
          "scale(1) rotate(4deg)"
      },

      {
        transform:
          "scale(1)"
      }

    ],
    {
      duration:700,
      easing:"ease-out"
    }
  );


  createEnergyExplosion();


  setTimeout(
    () => {

      teddyIntro.classList.add(
        "hidden"
      );


      photoReveal.classList.remove(
        "hidden"
      );

    },
    700
  );

}



teddyButton.addEventListener(
  "click",
  openTeddy
);


teddyButton.addEventListener(
  "keydown",
  event => {

    if(
      event.key === "Enter" ||
      event.key === " "
    ){

      event.preventDefault();

      openTeddy();

    }

  }
);



/* Teddy explosion */


function createEnergyExplosion(){

  const symbols = [

    "🧸",
    "💗",
    "💕",
    "💖",
    "✨",
    "🌸",
    "⭐",
    "🎀"

  ];


  for(
    let i = 0;
    i < 55;
    i++
  ){

    const element =
      document.createElement(
        "div"
      );


    element.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    element.style.position =
      "fixed";


    element.style.left =
      "50%";


    element.style.top =
      "50%";


    element.style.zIndex =
      "200";


    element.style.pointerEvents =
      "none";


    element.style.fontSize =
      (
        Math.random() *
        20 +
        10
      ) +
      "px";


    element.style.transition =
      "transform 1.4s ease-out, opacity 1.4s ease-out";


    document.body.appendChild(
      element
    );


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      100 +
      Math.random() *
      350;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    requestAnimationFrame(
      () => {

        element.style.transform =
          `translate(
            ${x}px,
            ${y}px
          )
          scale(
            ${Math.random()+.5}
          )`;


        element.style.opacity =
          "0";

      }
    );


    setTimeout(
      () => {

        element.remove();

      },
      1600
    );

  }

}



/* =========================================================
   FINAL SCREEN
========================================================= */


finalButton.addEventListener(
  "click",
  () => {

    showScreen(
      finalScreen
    );


    createConfetti();

  }
);



/* Confetti */


function createConfetti(){

  const container =
    $("confetti");


  container.innerHTML =
    "";


  const symbols = [

    "❤️",
    "💕",
    "💖",
    "✨",
    "🌸",
    "🎉",
    "⭐",
    "🎀",
    "🧸"

  ];


  for(
    let i = 0;
    i < 110;
    i++
  ){

    const piece =
      document.createElement(
        "div"
      );


    piece.className =
      "confetti-piece";


    piece.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    piece.style.left =
      Math.random() *
      100 +
      "vw";


    piece.style.fontSize =
      Math.random() *
      15 +
      8 +
      "px";


    piece.style.animationDuration =
      Math.random() *
      3 +
      3 +
      "s";


    piece.style.animationDelay =
      Math.random() *
      1.5 +
      "s";


    container.appendChild(
      piece
    );

  }

}



/* =========================================================
   REPLAY
========================================================= */


replayButton.addEventListener(
  "click",
  () => {

    location.reload();

  }
);



/* =========================================================
   INITIALIZE
========================================================= */


resizeCanvas();

</script>

</body>
</html>
