let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountainsFront= document.getElementById('mountains-front')
let text = document.getElementById('text')
let bnt = document.getElementById('bnt')
let mountainsBehind = document.getElementById('mountains-behind')
let header = document.querySelector('header')


window.addEventListener('scroll',function(){
let value = this.window.scrollY;
stars.style.left = value *2 + 'px'
moon.style.top = value * 1 + 'px'
mountainsBehind.style.top = value* 0.5 + 'px'
mountainsFront.style.top = value* 0 + 'px'
text.style.marginRight = value * 4 + 'px'
text.style.marginTop = value * 1.5 + 'px'
bnt.style.marginTop = value * 1.5 + 'px'
header.style.top = value* 0.5 + 'px'
})