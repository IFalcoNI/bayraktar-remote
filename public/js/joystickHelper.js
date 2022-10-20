let joyParam = { "title": "joystick" };
let Joy = new JoyStick('joyDiv', joyParam); let intervalId;
const handleJoystick = () => {
    intervalId = setInterval(function () { sendPost(`${Joy.GetX()}|${Joy.GetY()}`) }, 200);
}
handleJoystick()
      // setInterval(function(){sendPost(Joy.GetDir())}, 300);