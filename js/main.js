var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.init = function () {
        fetch("fragments/_top-menu.html")
            .then(function (rsp) {
            return rsp.text();
        })
            .then(function (content) {
            document.getElementById("top-menu-container").innerHTML = content;
        });
        fetch("fragments/_footer.html")
            .then(function (rsp) {
            return rsp.text();
        })
            .then(function (content) {
            document.getElementById("footer").innerHTML = content;
        });
    };
    return Main;
}());
