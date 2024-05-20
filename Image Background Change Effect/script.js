var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var origImg = document.getElementById("origImg");
var line = document.getElementById("line");

origImg.style.width = ImgBox.offsetWidth + "px";
var leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}

ImgBox.onmouseleave = function (e) {
    // If cursor moves out to the right
    if (e.pageX > (leftSpace + ImgBox.offsetWidth)) {
        ImgWrap.style.width = "100%";
        line.style.left = ImgBox.offsetWidth + "px"; // Line to the extreme right
    }
    // If cursor moves out to the left
    else if (e.pageX < leftSpace) {
        ImgWrap.style.width = "0%";
        line.style.left = "0"; // Line to the extreme left
    }
}
