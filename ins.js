let vx=0
let vy=0
let px=0
let py=0

let lastTime=null

const ax_text=document.getElementById("ax")
const ay_text=document.getElementById("ay")
const vx_text=document.getElementById("vx")
const vy_text=document.getElementById("vy")
const px_text=document.getElementById("px")
const py_text=document.getElementById("py")

const canvas=document.getElementById("map")
const ctx=canvas.getContext("2d")

let cx=150
let cy=150

function draw(){

ctx.clearRect(0,0,300,300)

ctx.beginPath()
ctx.arc(cx+px*10,cy+py*10,5,0,Math.PI*2)
ctx.fill()

}

function updateDisplay(ax,ay){

ax_text.textContent=ax.toFixed(3)
ay_text.textContent=ay.toFixed(3)

vx_text.textContent=vx.toFixed(3)
vy_text.textContent=vy.toFixed(3)

px_text.textContent=px.toFixed(3)
py_text.textContent=py.toFixed(3)

draw()

}

function handleMotion(e){

let ax=e.acceleration.x||0
let ay=e.acceleration.y||0

let now=Date.now()

if(!lastTime){
lastTime=now
return
}

let dt=(now-lastTime)/1000
lastTime=now

vx+=ax*dt
vy+=ay*dt

px+=vx*dt
py+=vy*dt

updateDisplay(ax,ay)

}

function handleMotion(e){

let ax=e.acceleration.x||0
let ay=e.acceleration.y||0

let threshold=parseFloat(threshold_input.value)||0

// Deadband filter
if(Math.abs(ax)<threshold){ ax=0 }
if(Math.abs(ay)<threshold){ ay=0 }

let now=Date.now()

if(!lastTime){
lastTime=now
return
}

let dt=(now-lastTime)/1000
lastTime=now

vx+=ax*dt
vy+=ay*dt

px+=vx*dt
py+=vy*dt

updateDisplay(ax,ay)

}

document.getElementById("start").onclick=async function(){

if(typeof DeviceMotionEvent.requestPermission==="function"){

let permission=await DeviceMotionEvent.requestPermission()

if(permission!=="granted"){
alert("Permission denied")
return
}

}

window.addEventListener("devicemotion",handleMotion)

}

document.getElementById("reset").onclick=function(){

vx=0
vy=0
px=0
py=0

}
