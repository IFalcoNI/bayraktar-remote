let joy3Param = { "title": "joystick3" };
let Joy3 = new JoyStick('joy3Div', joy3Param); let intervalId;
const handleJoystick = () => {
    intervalId = setInterval(function () { sendPost(`${Joy3.GetX()}|${Joy3.GetY()}`) }, 200);
}
handleJoystick()
      // setInterval(function(){sendPost(Joy3.GetDir())}, 300);