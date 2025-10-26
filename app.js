let Randomnumber = Math.floor(Math.random()*10)+1;
console.log(Randomnumber);
function clickAction() {
    let getnumber = parseInt(document.getElementById("number").value);
    
    if(Randomnumber>getnumber){
        document.getElementById("result").innerHTML ="Try a higher number!! 😕";
        document.getElementById("image").style.display="none";
    }
    if(Randomnumber<getnumber) {
        document.getElementById("result").innerHTML="Try a lower number!! 😕";
        document.getElementById("image").style.display="none";
    }
    if(Randomnumber==getnumber) {
        document.getElementById("result").innerHTML="You Won!! 🥳";
        document.getElementById("image").style.display="block";
    }
}