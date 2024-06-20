var x = document.getElementById("myBtn");
x.addEventListener("mouseout", myFunction);
x.addEventListener("mouseenter", mySecondFunction);
function myFunction() {
    document.getElementById("testA").style.display = "none";
}
function mySecondFunction() {
    document.getElementById("testA").style.display = "block";
}
// Step 1: Get user coordinates 
function getCoordintes() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        var coordinates = [lat, lng];
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        getCity(coordinates);
        return;
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
}
// Step 2: Get city name 
function getCity(coordinates) {
    var xhr = new XMLHttpRequest();
    var lat = coordinates[0];
    var lng = coordinates[1];
    // Paste your LocationIQ token below. 
    xhr.open('GET', "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude==" +
        lat + "&longitude=" + lng + "&localityLanguage=en");
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response)
        }
    }
}