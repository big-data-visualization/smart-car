var joystick = function() {

    var key = ""
        , timer = null

        , supportTouch = "ontouchstart" in document.documentElement

    return {
        start: function(socket, selector, interval) {
            var hander = document.querySelector(selector)

            // bind keypress
            hander.addEventListener(supportTouch ? "touchstart" : "mousedown", function(e) {
                key = e.target.className.replace(/ctrl /, "")
            })

            hander.addEventListener(supportTouch ? "touchend" : "mouseup", function(e) {
                console.log("touchend")
                // clearInterval(timer)
                key = "stop"
                // socket && socket.emit("hardware:keypress", {
                //     key: key
                // })
            })

            timer = setInterval(function() {
                key && socket && socket.emit("hardware:keypress", {
                    key: key
                })
            }, interval || 300)
        }
        , stop: function() {
            clearInterval(timer)
        }
    }
}()