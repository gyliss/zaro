var Ceginformacio = /** @class */ (function () {
    function Ceginformacio() {
    }
    Ceginformacio.prototype.init = function () {
        var notionsElement = document.querySelectorAll(".notion");
        var fetchSize = notionsElement.length;
        var titles = ["marketing", "CEO", "HR"];
        fetch("https://randomuser.me/api/?results=" + fetchSize)
            .then(function (rsp) {
            return rsp.json();
        })
            .then(function (data) {
            for (var i = 0; i < fetchSize; i++) {
                var person = data.results[i];
                var notionElement = notionsElement.item(i);
                var avatarElement = notionElement.querySelector(".avatar");
                var nameandtitleElement = notionElement.querySelector(".nameandtitle");
                var avatarSourceUrl = person.picture.medium;
                var nameandtitle = person.name.first + " - " + titles[i];
                avatarElement.src = avatarSourceUrl;
                nameandtitleElement.innerHTML = nameandtitle;
            }
        });
    };
    return Ceginformacio;
}());
