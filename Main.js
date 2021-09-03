function NodeAddition()
{
    let checker=1;
    let selc=document.getElementById("bodiy");
    let top=document.createElement('div');
    let eraser=document.createElement('button');
    let rainbow=document.createElement('button');
    rainbow.onclick= function(){
        checker=0;
    }
    rainbow.innerHTML="rainbow";
    top.appendChild(rainbow);
    eraser.innerHTML="Eraser";
    eraser.onclick= function(){picker.value="#ffffff";
checker=1;};
    top.id="button_holder";
    top.appendChild(eraser);
    selc.appendChild(top);
    let label=document.createElement('label');
    label.setAttribute("for","color pallete");
    label.innerHTML= "select the color";
    let picker=document.createElement('input');
    picker.type="color";
    picker.onclick=function(){
        checker=1;
    }
    let node=document.createElement('div');
    node.setAttribute("id","myDiv");
    selc.appendChild(node);
    top.appendChild(label);
    top.appendChild(picker);
    let nod=document.createElement('div');
    nod.setAttribute("id","grid");
    let sel=document.getElementById("myDiv");
    sel.appendChild(nod);
    var n;
    let button=document.createElement('button');
    button.innerHTML="clear";
    button.onclick=function(){clearscreen();};
    '#'+Math.floor(Math.random()*16777215).toString(16); 
    function clearscreen()
    {
        for(let i=0;i<n*n;i++)
{
    change[i].setAttribute("style","background-color: white;");
}
    }
    top.appendChild(button);
    n=prompt("enter the grid length");
    for(let i=0;i<n*n;i++)
    {
        let dvi=document.createElement('div');
        dvi.setAttribute("id","cell");
        dvi.setAttribute("class","music");
        let sl=document.getElementById("grid");
        sl.appendChild(dvi);
    }
    let rooty= document.documentElement;
    rooty.style.setProperty('--n',n);
let change=document.getElementsByClassName("music");
let colo;
function settings(x)
{if(checker==1)
    colo= picker.value;
    else
    colo='#'+Math.floor(Math.random()*16777215).toString(16);
    x.setAttribute("style", "background-color: "+colo+";");
}
for(let i=0;i<n*n;i++)
{
    change[i].onmousemove= function(event){settings(change[i]);};
}
}
NodeAddition();

