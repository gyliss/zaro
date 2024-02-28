class Main {

    init() {
        let url = new URL("/fragments/_top-menu.html", window.location.origin);
        fetch(url.href)
            .then(rsp => {
                return rsp.text();
            })
            .then(content => {
                document.getElementById("top-menu-container").innerHTML = content;
            });

        url = new URL("/fragments/_footer.html", window.location.origin);
        fetch(url.href)
            .then(rsp => {
                return rsp.text();
            })
            .then(content => {
                document.getElementById("footer").innerHTML = content;
            });
    }
}