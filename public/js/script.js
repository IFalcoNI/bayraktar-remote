// $(() => {
//     $("button").click(function () {
//         let clicked = $(this).val();
//         sendPost(clicked)
//     });
// });
const sendPost = (props) => {
    $.post(`/cmd`, {
        cmd: `${props}`
    })
}
const changeMode = () => {
    let btn =
        document.getElementById("btn-mode");
    let joystick = document.getElementById("myJoystick"); if (btn.style.display === "flex") { btn.style.display = "none"; joystick.style.display = "flex"; handleJoystick() } else {
        btn.style.display = "flex"; joystick.style.display = "none"; clearInterval(intervalId)
    }
}
