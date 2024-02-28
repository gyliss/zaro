class Ceginformacio {

    init() {
        let notionsElement = document.querySelectorAll(".notion");
        let fetchSize = notionsElement.length;
        let titles = ["marketing", "CEO", "HR"];
        fetch("https://randomuser.me/api/?results=" + fetchSize)
            .then(rsp => {
                return rsp.json();
            })
            .then(data => {
                for (let i = 0; i < fetchSize; i++) {
                    let person = data.results[i];
                    let notionElement = notionsElement.item(i);
                    let avatarElement = notionElement.querySelector(".avatar") as HTMLImageElement;
                    let nameandtitleElement = notionElement.querySelector(".nameandtitle");
                    let avatarSourceUrl = person.picture.medium;
                    let nameandtitle = person.name.first + " - " + titles[i];
                    avatarElement.src = avatarSourceUrl;
                    nameandtitleElement.innerHTML = nameandtitle;
                }
            });
    }
}