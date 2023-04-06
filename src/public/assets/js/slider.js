var index; //khai báo biến index đại diện cho slide hiện tại
function show() { //khao báo hàm hiển thị slide
    var slides = document.getElementsByClassName("img");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index].style.display = "block";
    dots[index].className += " active";
    //chuyển đến slide tiếp theo
    index++;
    //nêu đang ở slide cuối thì chuyển về đầu
    if (index > slides.length - 1) {
        index = 0;
    }
    //tự động chuyển đổi sau 10s
    setTimeout(show, 10000);
}
show(index = 0); //mặc định hiển thị slide đầu tiên

function SlideCurrent(n) {
    show(index = n);
}
