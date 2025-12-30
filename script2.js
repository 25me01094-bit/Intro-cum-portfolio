const clicks = [0, 0];
let prevscroll = 0;
document.querySelector(".right").addEventListener("click", () => {
    if (clicks[1] - clicks[0] !== 3) clicks[1]++;
    check();
});
document.querySelector(".left").addEventListener("click", () => {
    if (clicks[0] !== clicks[1]) clicks[0]++;
    check();
});
function check() {
    const scroll = clicks[1] - clicks[0];
    const container = document.querySelector(".councillors");
    if (scroll > prevscroll) {
        container.scrollBy({
            left: document.querySelector(".cards").clientWidth+30,
            behavior: "smooth"
        });
    } else if (scroll < prevscroll) {
        container.scrollBy({
            left: -document.querySelector(".cards").clientWidth-30,
            behavior: "smooth"
        });
    }
    prevscroll = scroll;
}
