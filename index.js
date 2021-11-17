function myfun() {
    document.getElementById("box").style.display = "block";
    document.getElementById("user").style.display = "block";
    document.getElementById("box1").style.display = "none";

}
function myfun1() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("user").style.display = "none";

}
function myfun2() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("user").style.display = "none";

}
function myfun3() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "block";
    document.getElementById("user").style.display = "none";

}
var typed = new Typed(".auto", {
    strings: [" Abhishek Tomar ", "Front-End Developer", "a UI Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})