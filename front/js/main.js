const button = document.querySelector(".boxing__main-how");
const close = document.querySelector(".popup__window-close");
const popup = document.querySelector(".popup");
const overflow = document.querySelector("body");

const teamsFirst = document.querySelector('.team-1'),
      teamsSecond = document.querySelector('.team-2'),
      dateField = document.querySelector('.team-wrap-day'),
      timeField = document.querySelector('.team-wrap-time'),
      mainLink = document.querySelector('.main-link'),
      leftShirt = document.querySelector('.boxing__main-leftShirt'),
      rightShirt = document.querySelector('.boxing__main-rightShirt');

let nDate = Math.round(Date.now()/1000);

button.addEventListener("click", () => {
    popup.style.display = "flex";
    overflow.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    popup.style.display = "none";
    overflow.style.overflow = "visible";
});

fetch(`./json/main.json?${Date.now()}`)
    .then((response) => {
        return response.json();
    })
    .then(res => {
        renderElements(res);
    });

const renderElements = (matches) => {
    matches = matches.sort((a, b) => {
        return a.systemDate - b.systemDate;
    })

    let currentMatch = matches.find(match => {
        if (match.systemDate >= nDate) {
            return true;
        }
    })

    if (teamsFirst && teamsSecond && dateField && timeField && leftShirt && rightShirt && currentMatch) {
        teamsFirst.innerHTML = currentMatch.team_a
        teamsSecond.innerHTML = `<div class="label"></div><span class="team-b">${currentMatch.team_b}</span>`
        dateField.innerHTML = currentMatch.date;
        timeField.innerHTML = currentMatch.time;
        // mainLink.href = currentMatch.url;
        leftShirt.src = "img/" + currentMatch.shirtLeft;
        rightShirt.src = "img/" + currentMatch.shirtRight;
    }
}
