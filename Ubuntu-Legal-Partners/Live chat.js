const liveChatContainer = document.getElementById("live-chat-container");
const liveChatStatus = document.getElementById("live-chat-status");


const workingHours = {
    start: 9,
    end: 17,
    days: [1, 2, 3, 4, 5] 
};
// const workingHours = {
//     startHour: 9,
//     startMinute: 30, 
//     endHour: 17,
//     endMinute: 0, 
//     days: [1, 2, 3, 4, 5] 
// };

function isWithinWorkingHours() {
    const currentDateTime = new Date();
    const currentDay = currentDateTime.getDay();
    const currentHour = currentDateTime.getHours();
    const currentMinute = currentDateTime.getMinutes();

    if (workingHours.days.includes(currentDay)) {
        if (
            (currentHour > workingHours.start && currentHour < workingHours.end) || // Between start and end hours
            (currentHour === workingHours.start && currentMinute >= 0) || // Exactly at the start hour
            (currentHour === workingHours.end && currentMinute === 0) // Exactly at the end hour
        ) {
            return true;
        }
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