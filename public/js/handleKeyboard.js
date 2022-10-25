window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.keyCode) {
        case 40:
            sendPost('back-back');
            break;
        case 38:
            sendPost('forward-forward');
            break;
        case 37:
            sendPost('left-left');
            break;
        case 39:
            sendPost('right-right');
            break;
        case 32:
            sendPost('fire');
            break;
        default:
            return;
    }

    event.preventDefault();
}, true);
