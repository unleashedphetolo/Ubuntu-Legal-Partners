const liveChatContainer = document.getElementById("live-chat-container");
const liveChatStatus = document.getElementById("live-chat-status");


const workingHours = {
    start: 9,
    end: 17,
    days: [1, 2, 3, 4, 5] 
};


function isWithinWorkingHours() {
    const currentDateTime = new Date();
    const currentDay = currentDateTime.getDay();
    const currentHour = currentDateTime.getHours();

    
    if (
        workingHours.days.includes(currentDay) &&
        currentHour >= workingHours.start &&
        currentHour < workingHours.end
    ) {
        return true;
    }
    return false;
}


function toggleLiveChatContainer() {
    if (isWithinWorkingHours()) {
        liveChatContainer.style.display = "block";
        liveChatStatus.textContent = "We're available to chat!";
        liveChatStatus.classList.add("available");
        liveChatStatus.classList.remove("unavailable");
    } else {
        liveChatContainer.style.display = "block";
        liveChatStatus.textContent = "We're unavailable to chat. Please try again during working hours.";
        liveChatStatus.classList.add("unavailable");
        liveChatStatus.classList.remove("available");
    }
}


toggleLiveChatContainer();


setInterval(toggleLiveChatContainer, 60000);
  



