!function(WIN, io) {

    // Init & Share socket
    window.socket = io()

    // Start joystick monitor
    joystick.start(socket, "#joystick", 300)

    // Render audio wave
    ;(new audioWave).init({
        selector: "#audioPanel"
/*        ,
        onUpdate: function(buffer) {
            // console.log(buffer)
            socket.emit("audio", {
                data: buffer
            })
        }*/
    })



    document.querySelector("#testShoutBtn").addEventListener("click", function(e) {
        var data

        try{
            data = JSON.parse(document.querySelector("#testShoutInput").value)
        }
        catch(e){}
        data && socket.emit("shout", data)
    })
}(window, io)


