const jsonData = fetch("json/alerts.json")

.then(function (response) {
    return response.json();
})

.then(function (data) {
    createAlerts(data);
})

.catch(function (err) {
    console.log("error: " + err);
});

function createAlerts(data){ 

const alertSection = document.createElement("section");
var mainContainer = document.getElementById("alerts");

for (var i = 0; i < data.length; i++) {
    const alertDivs = document.createElement("section");
    const alertText = document.createElement("p");
    
    alertText.innerHTML = data[i].message;

    mainContainer.appendChild(alertText);
    alertText.setAttribute("class", data[i].alertId)


    // alertText.setAttribute("id",data[i].alertId)
}

const alertOneColors = document.querySelectorAll(".alert1")
alertOneColors.forEach(alertOneColor => {
    alertOneColor.style.backgroundColor = data[0].background}
)

const alertTwoColors = document.querySelectorAll(".alert2")
alertTwoColors.forEach(alertTwoColor => {
    alertTwoColor.style.backgroundColor = data[1].background}
)

const alertThreeColors = document.querySelectorAll(".alert3")
alertThreeColors.forEach(alertThreeColor => {
    alertThreeColor.style.backgroundColor = data[2].background}
)
}