let body=document.getElementsByTagName("body")[0];
let divi=document.createElement("div");
body.appendChild(divi);
divi.className="calculatorbody";
let screen=document.createElement("div");
divi.appendChild(screen);
screen.className="screen";
let buttons= document.createElement("div");
divi.appendChild(buttons);
let screendiv1= document.createElement("div");
screendiv1.className="screendiv1";
let screendiv2= document.createElement("div");
let screendiv= document.createElement("div");
screendiv.className="screendiv";
screendiv2.className="screendiv2";
screendiv.appendChild(screendiv1);
screendiv.appendChild(screendiv2);
screen.appendChild(screendiv);
screendiv2.innerHTML="0";
buttons.className="gridcontainer";
let clear=document.createElement("button");
let backspace=document.createElement("button");
let but=document.createElement("div");
but.className="clearer";
screen.appendChild(but);
clear.className="clear";
backspace.className="backspace";
but.appendChild(clear);
but.appendChild(backspace);
for(let i=0;i<16;i++)
{
  let button=document.createElement("button");
  buttons.appendChild(button);
  button.className="gridelement";
}
document.getElementsByClassName("gridelement")[0].innerHTML='7'
document.getElementsByClassName("gridelement")[1].innerHTML='8'
document.getElementsByClassName("gridelement")[2].innerHTML='9'
document.getElementsByClassName("gridelement")[3].innerHTML='&#247'
document.getElementsByClassName("gridelement")[4].innerHTML="4"
document.getElementsByClassName("gridelement")[5].innerHTML="5"
document.getElementsByClassName("gridelement")[6].innerHTML="6"
document.getElementsByClassName("gridelement")[7].innerHTML="&#215"
document.getElementsByClassName("gridelement")[8].innerHTML="1"
document.getElementsByClassName("gridelement")[9].innerHTML="2"
document.getElementsByClassName("gridelement")[10].innerHTML="3"
document.getElementsByClassName("gridelement")[11].innerHTML="-"
document.getElementsByClassName("gridelement")[12].innerHTML="."
document.getElementsByClassName("gridelement")[13].innerHTML="0"
document.getElementsByClassName("gridelement")[14].innerHTML="="
document.getElementsByClassName("gridelement")[15].innerHTML="+"
let equal=document.getElementsByClassName("gridelement")[14];
clear.innerHTML="Clear";
backspace.innerHTML="backspace";
equal.onclick= function(){
  var temp=screendiv2.innerHTML;
  let swa;
  swa=screendiv2.innerHTML;
  screendiv2.innerHTML=(eval(temp)).toPrecision(3);
  screendiv1.innerHTML=swa;
}
for(let i=0;i<16;i++)
{
if(i==14)
continue;
let temp=document.getElementsByClassName("gridelement")[i];
temp.onclick= function(){
  if(screendiv2.innerHTML=="0")
  {
    if(i==3)
    screendiv2.innerHTML="/";
    else if(i==7)
    screendiv2.innerHTML="*";
    else
    screendiv2.innerHTML=temp.innerHTML;
  }
  else{
  if(i==3)
  screendiv2.innerHTML+="/";
  else if(i==7)
  screendiv2.innerHTML+="*";
  else
  screendiv2.innerHTML+=temp.innerHTML;}
}
}
clear.onclick= function(){
  screendiv2.innerHTML="0";
}
backspace.onclick = function(){
 screendiv2.innerHTML=screendiv2.innerHTML.substring(0,screendiv2.innerHTML.length-1);
}
document.addEventListener('keypress',function(event){
  if(event.key=="=")
    equal.onclick();
    else
    screendiv2.innerHTML+=event.key;
});
document.addEventListener('keydown',function(event){if(event.code==="Backspace")
backspace.onclick();
else if(event.key==="Delete")
clear.onclick();})
 