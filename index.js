function myfun() {
    document.getElementById("box").style.display = "block";
    // document.getElementById("user").style.display = "none";
    document.getElementById("box4").style.display = "none";
    document.getElementById("box1").style.display = "none";

}
function myfun1() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "block";
    document.getElementById("box4").style.display = "none";
    // document.getElementById("user").style.display = "none";

}
function myfun2() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box4").style.display = "none";
    // document.getElementById("user").style.display = "none";

}
function myfun3() {
    document.getElementById("box").style.display = "none";
    document.getElementById("box1").style.display = "none";
    document.getElementById("box4").style.display = "block";
    // document.getElementById("user").style.display = "none";

}
var typed = new Typed(".auto", {
    strings: [" Abhishek Tomar ", "Front-End Developer", "a UI Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
var fom = document.getElementById('fom');

fom.addEventListener('mousemove', (e) =>{
    var x = (window.innerWidth / 2 - e.pageX) / 12;
    var y = (window.innerHeight / 2 - e.pageY) / 12;

    fom.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';

});

fom.addEventListener('mouseleave', function(){
    fom.style.transform = 'rotateX(0deg) rotateY(0deg)';
})