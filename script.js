
let btn=document.getElementById("btn");
btn.addEventListener("click",function fun(e){
e.preventDefault();
let username=document.getElementById("username").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
if(username.length<=2){
    let a=document.getElementById("uerr").innerHTML="Enter valid name";
    document.getElementById("uerr").style.color="red";
    document.getElementById("uerr").style.backgroundColor="white";
}
  if(!email.includes('@')){
    let b=document.getElementById("eerr").innerText="Enter valid Email";
    document.getElementById("eerr").style.color="red";
    document.getElementById("eerr").style.backgroundColor="white";
} 

  if(pass.length<6){
    let c=document.getElementById("perr").innerText="Enter valid password";
    document.getElementById("perr").style.color="red";
    document.getElementById("perr").style.backgroundColor="white";
}  
else{
    document.getElementById("uerr").innerText="";
    document.getElementById("eerr").innerText="";
    document.getElementById("perr").innerText="";
}   

});