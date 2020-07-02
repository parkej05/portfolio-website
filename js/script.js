console.log("Hello! Welcome to my UX Design Portfolio")
function menuToggle () {
    var x = document.getElementById ('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}