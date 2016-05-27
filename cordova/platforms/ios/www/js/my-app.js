// Initialize app
var myApp = new Framework7();

var isAndroid = Framework7.prototype.device.android;
var isIos = Framework7.prototype.device.ios;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Change Through navbar layout to Fixed
if (isAndroid) {
    // Change class
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    $$('.view .navbar').prependTo('.view .page');
}

// Init App
var myApp = new Framework7({
    // Enable Material theme for Android device only
    material: isAndroid,
    // Enable Template7 pages
    template7Pages: true
});

// Init View
var mainView = myApp.addView('.view-main', {
    // Don't worry about that Material doesn't support it
    // F7 will just ignore it for Material theme
    dynamicNavbar: true
});

$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var positionHtml = "<p>Longitude: " + position.coords.longitude + "</p>";
        positionHtml += "<p>Latitude: " + position.coords.latitude + "</p>";
        $$("#geolocation-data").html(positionHtml);
    }, function(err) {
        alert("Error" + err.message);
    }, { enableHighAccuracy: true });
});