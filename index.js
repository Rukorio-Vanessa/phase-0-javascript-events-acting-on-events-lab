// Your code here

// moves the dodger to the left;
function moveDodgerLeft() {
    var dodger = document.getElementById("dodger")
    var left = parseInt(dodger.style.left)
    left -= 30
    dodger.style.left = left+"px";

}
//moves the dodger to the right
function moveDodgerRight() {
    var dodger = document.getElementById("dodger")
    var left = parseInt(dodger.style.left)
    left += 40
    dodger.style.left = left+"px";
}    