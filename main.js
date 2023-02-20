var countDownDate = new Date("Mar 15, 2023 10:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    var apple = "AppleTv+"
    var URL = 'https://tv.apple.com/br/show/ted-lasso/umc.cmc.vtoh0mn0xn7t3c643xqonfzy';
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = 'You can enjoy on ' + apple.link(URL);
    }
}, 1000);