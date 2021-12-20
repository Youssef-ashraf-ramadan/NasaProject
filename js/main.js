function fadeMyDiv() {
    $("#preloader").fadeOut("slow")
}
$(document).ready(function () {
    window.setTimeout("fadeMyDiv();", 2e3)
});
new WOW().init();
