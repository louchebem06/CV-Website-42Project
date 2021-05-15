var cli = document.getElementById("console");
var closecli = document.getElementById("closecli");

function closeCLI()
{
  cli.style.cursor = 'wait';
  closecli.style.cursor = 'wait';
  cli.style.webkitFilter = 'blur(1px)';
  setTimeout(function(){cli.style.visibility = 'hidden';}, 150);
}

function openCLI()
{
  cli.style.cursor = 'move';
  closecli.style.cursor = 'pointer';
  cli.style.visibility = 'visible';
  cli.style.webkitFilter = 'blur(0px)';
}


//Source: https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(cli);
function dragElement(elmnt)
{
  elmnt.onmousedown = dragMouseDown;

  elmnt.style.top = 150+"px";
  elmnt.style.left = 150+"px";

  function dragMouseDown(e)
  {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e)
  {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    if (elmnt.offsetTop - pos2 < 0)
      elmnt.style.top = 0+"px";
    if (elmnt.offsetLeft - pos1 < 0)
      elmnt.style.left = 0+"px";
    if (elmnt.offsetTop - pos2 > 390)
      elmnt.style.top = 390+"px";
    if (elmnt.offsetLeft - pos1 > 560)
      elmnt.style.left = 560+"px";
  }

  function closeDragElement()
  {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}