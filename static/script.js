// static/script.js

function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.getElementById('homeButton');

    if(homeButton) {
        homeButton.addEventListener('click', function() {
            redirectToHome();
        });
    }

    function redirectToHome() {
        var homeUrl = homeButton.getAttribute('data-url');
        window.location.href = homeUrl;
    }
})