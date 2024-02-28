var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        var url = new URL("/fragments/_top-menu.html", window.location.origin);
        fetch(url.href)
            .then(function (rsp) {
            return rsp.text();
        })
            .then(function (content) {
            document.getElementById("top-menu-container").innerHTML = content;
        });
        url = new URL("/fragments/_footer.html", window.location.origin);
        fetch(url.href)
            .then(function (rsp) {
            return rsp.text();
        })
            .then(function (content) {
            document.getElementById("footer").innerHTML = content;
        });
    };
    return Main;
}());
