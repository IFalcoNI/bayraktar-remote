let joy3Param = { "title": "joystick3" };
let Joy3 = new JoyStick('joy3Div', joy3Param);
// setInterval(function () { sendPost(`${Joy3.GetPosX()}-${Joy3.GetPosY()}`) }, 200);
// setInterval(function () { sendPost(`${Joy3.GetPosX()}-${Joy3.GetPosY()}`) }, 200);
setInterval(function () { sendPost(Joy3.getDir()) }, 200);