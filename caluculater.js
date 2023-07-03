function Allclear(){
    document.getElementById("DS").value="";
}
function Changing(b){
    document.getElementById("DS").value+=String(b);
}
function evl(){
   document.getElementById("DS").value=eval(document.getElementById('DS').value);
   // document.getElementById("buttonEqualTo").innerHTML="suresh";
}
function Clr(){
    let text=document.getElementById('DS').value;
    let length=text.length;
    document.getElementById('DS').value=text.slice(0,length-1);
}
