
let count=0;

document.getElementById("decrese").onclick =function(){
    count-=1;
    document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("reset").onclick =function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("increse").onclick =function(){
    count+=1;
    document.getElementById("countlabel").innerHTML=count;
}/*
//input example
let username;
const greting="Hello"
document.getElementById("mybutton").onclick= function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("label").innerHTML=greting+ " "+username;
}
*/
/*
//promt window

let age=window.prompt("How old are you ?");
age=Number(age);21
age+=1;
console.log(age);
document.getElementById("age").innerHTML ="happybirthday You are "+age+" years old";

*/
/*
document.getElementById("Submitbutton").onclick=function(){

    a=document.getElementById("ainp").value;
    a=Number(a);
    b=document.getElementById("binp").value;
    b=Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("clabel").innerHTML="Side of C :"+c;
    console.log(c)
}*/
/*
let x;
let y;
let z;
document.getElementById("roll").onclick=function(){
    x=Math.floor(Math.random()*6)+1;
    y=Math.floor(Math.random()*6)+1;
    z=Math.floor(Math.random()*6)+1;

    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;
    console.log(x);
    console.log(y);
    console.log(z);
}*/
/*
let phonenumber="123-456-789"
let  username="   Shakil Haque   ";
console.log(username.length);
console.log(username.charAt())
console.log(username.indexOf("q"));
console.log(username.lastIndexOf());
console.log(username.trim());
console.log(username.toLowerCase())
console.log(username.toUpperCase())
phonenumber=phonenumber.replaceAll("-","")
console.log(phonenumber);
console.log(username);
*/
let FullName="toriques sadik (rayhan)";
// fristname=FullName.slice("0","6");
// lastname=FullName.slice("7",);
fristname=FullName.slice("0",FullName.indexOf(" "));
lastname=FullName.slice(FullName.indexOf(" "),)
console.log(fristname);
console.log(lastname);