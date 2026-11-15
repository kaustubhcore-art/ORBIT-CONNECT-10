function startMission() {
    alert("🚀 ORBIT CONNECT-10 Mission Started!");

    document.querySelector("h2").innerText =
        "Mission Successfully Launched!";

    document.querySelector(".mission p").innerText =
        "Satellite mission is now active!";

    addActivity("Mission Started Successfully");
}
function activateSatellite() {
    document.getElementById("satelliteStatus").innerText =
        "Status: ACTIVE 🟢";

    alert("🚀 Satellite Activated Successfully!");

    addActivity("Satellite Activated Successfully");
}
function launchSatellite() {
    document.getElementById("launchStatus").innerText =
        "🚀 Satellite Successfully Launched into MEO Orbit!";

    alert("MISSION SUCCESSFUL! 🚀");
    addActivity("Satellite Successfully Launched into MEO Orbit");
}
function addActivity(message) {
    const list = document.getElementById("activityList");
    const item = document.createElement("li");

    item.innerText = message;
    list.appendChild(item);
}
function generateReport() {
    document.getElementById("reportStatus").innerText =
        "Mission Report Generated Successfully! 📊";

    addActivity("Mission Report Generated");
    alert("📊 ORBIT CONNECT-10 Report Ready!");
}
function downloadReport() {
    const report = `
ORBIT CONNECT-10
SPACE MISSION REPORT

Satellite: Communication Satellite
Orbit: MEO
Power: Solar + Battery
Communication: Laser
Mission Duration: 10 Years
Status: Operational

Mission Report Generated Successfully!
`;

    const file = new Blob([report], {
        type: "text/plain"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "ORBIT_CONNECT_10_Report.txt";
    link.click();

    URL.revokeObjectURL(link.href);
}
function changeOrbit() {
    document.getElementById("controlStatus").innerText =
        "Satellite Orbit: MEO Checked Successfully 🛰️";

    addActivity("MEO Orbit Checked");
}

function checkPower() {
    document.getElementById("controlStatus").innerText =
        "Power System: Solar + Battery Normal 🟢";

    addActivity("Power System Checked");
}
function updateMissionClock() {
    const now = new Date();

    document.getElementById("missionClock").innerText =
        now.toLocaleString();
}

updateMissionClock();
setInterval(updateMissionClock, 1000);
function startCountdown() {
    let count = 10;

    const display = document.getElementById("countdown");

    const timer = setInterval(function() {
        display.innerText = "Launch in: " + count;

        count--;

        if (count < 0) {
            clearInterval(timer);
            display.innerText = "🚀 COUNTDOWN COMPLETE!";
            addActivity("Countdown Completed");
        }
    }, 1000);
}
function checkAlerts() {
    document.getElementById("alertStatus").innerText =
        "All Mission Systems Checked Successfully! 🟢";

    addActivity("Mission Alerts Checked");
}
function finishMission() {
    document.getElementById("completionStatus").innerText =
        "🎉 ORBIT CONNECT-10 MISSION COMPLETED!";

    addActivity("Mission Completed Successfully");

    alert("Congratulations Commander! 🚀");
}
