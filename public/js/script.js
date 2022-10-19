$(() => {
    $("button").click(function () {
        let clicked = $(this).val();
        sendPost(clicked)
    });
});
const sendPost = (props) => {
    $.post(`/cmd`, {
        cmd: `${props}`
    })
}