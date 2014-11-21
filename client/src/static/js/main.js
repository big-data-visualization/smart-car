!function(WIN, io) {

    // Init & Share socket
    window.socket = io()

    // bind keypress
    document.querySelector("#joystick").addEventListener("keypress", function(e) {
        var key = e.target.className.replace(/ctrl /, "");
        key && socket.emit("hardware:keypress", {
            data: key
        });
    })

    // Render audio wave
    ;(new audioWave).init({
        selector: "#audioPanel",
        onUpdate: function(buffer) {
            // console.log(buffer)
            socket.emit("audio", {
                data: buffer
            })
        }
    })


}(window, io)


