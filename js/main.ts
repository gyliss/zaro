class Main {

    init() {
        fetch("fragments/_top-menu.html")
            .then(rsp => {
                return rsp.text();
            })
            .then(content => {
                document.getElementById("top-menu-container").innerHTML = content;
            });

        fetch("fragments/_footer.html")
            .then(rsp => {
                return rsp.text();
            })
            .then(content => {
                document.getElementById("footer").innerHTML = content;
            });
    }
}