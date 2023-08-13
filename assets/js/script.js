"use strict";var pianoKeys=document.querySelectorAll(".piano-keys .key"),volumeSlider=document.querySelector(".volume-slider input"),keysCheckbox=document.querySelector(".keys-checkbox input"),allKeys=[],audio=new Audio("assets/audio/a.wav"),playTune=function(e){audio.src="assets/audio/"+e+".wav",audio.play();var t=document.querySelector('[data-key="'+e+'"]');t.classList.add("active"),setTimeout(function(){t.classList.remove("active")},150)};pianoKeys.forEach(function(e){allKeys.push(e.dataset.key),e.addEventListener("click",function(){return playTune(e.dataset.key)})});var handleVolume=function(e){audio.volume=e.target.value},showHideKeys=function(){pianoKeys.forEach(function(e){return e.classList.toggle("hide")})},pressedKey=function(e){allKeys.includes(e.key)&&playTune(e.key)};keysCheckbox.addEventListener("click",showHideKeys),volumeSlider.addEventListener("input",handleVolume),document.addEventListener("keydown",pressedKey);