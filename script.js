const d = new Date().toLocaleTimeString();
let count=0;

function counter()
{
    count++;
    updateIncrement();
    updateColor();
    updatebackgroundcolor();
}
function updateIncrement()
{
    document.getElementById("count").innerHTML = count;
}
function updateColor()
{
    if(count%2===0)
        document.getElementById("current-time").style.color = "green";
    else   
        document.getElementById("current-time").style.color = "red";

}
function updatebackgroundcolor()
{
    if(count%2===0)
        document.getElementsById("container").style.background ="red";
    else
        document.getElementsById("container").style.background ="green";
}
document.getElementById("current-time").innerHTML = d;
document.getElementById("current-time").style.color = "black";