(function() {
    'use strict';
    chrome.runtime.onMessage.addListener(
        function(message, sender, callback) {
            console.log("message:", message);

            if (message.type === "up") {
                window.scrollBy({
                    top: -100,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (message.type === "down") {
                window.scrollBy({
                    top: 100,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (message.type === "half page up") {
                window.scrollBy({
                    top: -window.innerHeight / 2,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (message.type === "half page down") {
                window.scrollBy({
                    top: window.innerHeight / 2,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (message.type === "page up") {
                window.scrollBy({
                    top: -window.innerHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (message.type === "page down") {
                window.scrollBy({
                    top: window.innerHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                console.log("invalid message type:", message.type);
            }
        }
    );
})();
