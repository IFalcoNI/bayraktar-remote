const makeTurn = (direction) => {
    let dir = document.getElementById('direction')
    dir.innerHTML = direction
}
$(document).ready(() => {
    $("#forward").click(() => {
        $.post("/forward", {
            cmd: "forward"
        })
    });
    $("#back").click(() => {
        $.post("/back", {
            cmd: "back"
        })
    });
    $("#left").click(() => {
        $.post("/left", {
            cmd: "left"
        })
    });
    $("#right").click(() => {
        $.post("/right", {
            cmd: "right"
        })
    });
    $("#fire").click(() => {
        $.post("/fire", {
            cmd: "fire"
        })
    });

})