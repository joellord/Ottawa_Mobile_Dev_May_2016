// Initialize app and store it to myApp variable for futher access to its methods
var myApp = new Framework7();

// We need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Now we need to run the code that will be executed only for 'bacon' page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('bacon', function (page) {
    var fillerUrl = "http://baconipsum.com/api/?callback=?";
    var options = {
        "type": "meat-and-filler",
        "start-with-lorem": "1",
        "paras": "3"
    };

    $$.getJSON(fillerUrl, options, function(data) {
        if (data && data.length > 0) {
            $$("#need-filler").html("");
            for (var i = 0; i < data.length; i++) {
                $$("#need-filler").append("<p>" + data[i] + "</p>");
            }
        }
    });
});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'bacon') {
        // Following code will be executed for page with data-page attribute equal to "bacon"
        console.log("Option 2");
    }
});

// Option 3. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="bacon"]', function (e) {
    console.log("Option 3");
});