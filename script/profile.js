const storage = window.localStorage;
const welcomeMsgNode = document.querySelector("#welcome-msg");
const loadingMsgNode = document.querySelector("#loading-msg");
const profileContentNode = document.querySelector("#profile-content");
const errorNode = document.querySelector("#error-content");

welcomeMsgNode.innerHTML = `Welcome ${storage["first-name"]}!`;
loadingMsgNode.innerHTML = "Loading";

const loadInterval = setInterval(() => {
    const msg = loadingMsgNode.innerHTML;

    loadingMsgNode.innerHTML = msg.length < 10 ? msg + "." : "Loading"  
}, 500);

setTimeout(() => {
    clearInterval(loadInterval);

    profileContentNode.classList.add("hidden");
    errorNode.classList.remove("hidden");
}, 5000);