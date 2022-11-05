let joyParam = { 'title': 'joystick' };
let Joy = new JoyStick('joyDiv', joyParam);
let intervalId;
const handleJoystick = () => {
    intervalId = setInterval(function () {
        if (Joy.GetX() !== '0' || Joy.GetY() !== '0') {
            sendPost(`${Joy.GetX()}|${Joy.GetY()}`)
        }
    }
        , 200)
}
let slider = document.getElementById('speedRange');
slider.oninput = function () {
    sendPost(`Speed:${this.value}`)
}