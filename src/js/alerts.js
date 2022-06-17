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

function createAlerts(data) {
  var mainContainer = document.getElementById("alerts");

  for (var i = 0; i < data.length; i++) {
    const alertText = document.createElement("p");

    alertText.innerHTML = data[i].message;

    mainContainer.appendChild(alertText);

    alertText.style.backgroundColor = data[i].background;
    alertText.style.color = data[i].fontColor;
  }
}
