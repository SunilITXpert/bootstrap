
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.getElementById("scroll").classList.add("scrolling");
    } else {
        document.getElementById("scroll").classList.remove("scrolling");
    }
}
