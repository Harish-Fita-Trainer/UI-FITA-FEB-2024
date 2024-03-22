
function save() {
var pwd=document.getElementById("pwd").value;
var cpwd=document.getElementById("cpwd").value;
var name=document.getElementById("name").value
console.log("password",pwd);
console.log("password",cpwd);
console.log("name is",name);
if(name!="" && name!==undefined)
{
    document.getElementById("message").innerText="please enter name"
}

if(pwd===cpwd)
{

document.getElementById("message").innerText="matched"
}
else
{

document.getElementById("message").innerText="not matched"

}
}
window.onload = function() {
    document.getElementById("save").addEventListener('click', save);
}
