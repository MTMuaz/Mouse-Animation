var cursor = document.querySelector(".corsor");
var cursor = document.querySelector(".corsor2");
document.addEventListener("mousemove",function(e){
    cursor.style.csstext = cursor2.style.csstext = "left: "+ e.clientX + "px; top:" +e.clientY +"px;";
})