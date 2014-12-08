!function(WIN, io) {

    /\?123$/.test(location.href) && (document.querySelector("#testShoutWrap").style.display = "block")

    // active `active` for mobile
    document.addEventListener('touchstart', function(){
    }, false);

    // init FastClick
    FastClick && document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);

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

    document.querySelector("#testShout").addEventListener("submit", function(e) {
        e.preventDefault()
        var data
/*
        try{
            data = JSON.parse(document.querySelector("#testShoutInput").value)
        }
*/
        data = document.querySelector("#testShoutInput").value.trim()
        //catch(e){}
        data && socket.emit("shout", {type: "t", content: data})
    })

    document.querySelector("#testShoutBtn").addEventListener("click", function(e) {
        
    })

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    socket.on('camera', function(data) {
        if(!data || !data.base64) return
        var image = new Image()
        image.onload = function () { 
            context.clearRect(0, 0, canvas.width, canvas.height); 
            context.drawImage(image, 0, 0, canvas.width, canvas.height); 
        }
        image.src = 'data:image/png;base64,' + data.base64;
    })
    
}(window, io)


