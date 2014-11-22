var joystick = function() {

    var key = ""
        , timer = null

    return {
        start: function(socket, selector, interval) {
            var hander = document.querySelector(selector)

            // bind keypress
            hander.addEventListener("mousedown", function(e) {
                key = e.target.className.replace(/ctrl /, "")
            })

            hander.addEventListener("mouseup", function(e) {
                key = ""
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