(function() {
    'use strict';
    chrome.runtime.onMessage.addListener(
        function(message, sender, callback) {
            console.log("message:", message);

            if (message.type === "up") {
                window.scrollBy(0, -100);
            } else if (message.type === "down") {
                window.scrollBy(0, 100);
            } else if (message.type === "half page up") {
                window.scrollBy(0, -window.innerHeight / 2);
            } else if (message.type === "half page down") {
                window.scrollBy(0, window.innerHeight / 2);
            } else if (message.type === "page up") {
                window.scrollBy(0, -window.innerHeight);
            } else if (message.type === "page down") {
                window.scrollBy(0, window.innerHeight);
            } else {
                console.log("invalid message type:", message.type);
            }
        }
    );
})();
