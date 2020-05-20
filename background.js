function func1() {
   document.body.style.background = "url('backgrounds/bg0.png')";;
}
function func2() {
   document.body.style.background = "url('backgrounds/bg1.png')";;
}
function func3() {
    document.body.style.background = "url('backgrounds/bg2.png')";;
}
function func4() {
    document.body.style.background = "url('backgrounds/bg3.png')";;
}
function func5() {
    document.body.style.background = "url('backgrounds/bg4.png')";;
}
function random(){
  var i  = Math.floor(Math.random()*20)%6;
  if(i<=0) return random();
  return i;
}
function execute(){
  var i = random();
  eval('func'+i+'()');
}
execute();