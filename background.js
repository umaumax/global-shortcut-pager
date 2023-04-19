async function getCurrentTab() {
    let queryOptions = {
        active: true,
        lastFocusedWindow: true
    };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

console.log('start background script!')
chrome.commands.onCommand.addListener((command) => {
    console.log('command:', command)
    getCurrentTab().then((tab) => {
        console.log("tab:", tab);
        if (tab && tab.url) {
            const message = {
                type: command
            };
            chrome.tabs.sendMessage(tab.id, message, null);
        }
    });
});
