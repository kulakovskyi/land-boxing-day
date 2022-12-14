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

function GenerateSnow(options) {
    const self = this;
    let interval;
    const defaults = {
        elem: '',
        quantity: 100,
        snowFlakeClass: '',
    };
    let _snowFlakes = [];
    let _lastPositions = [];

    const _snowingTurn = function () {

        for (let i = 0; i < _lastPositions.length; i++) {
            (function (k) {
                const newPosX = _lastPositions[k].left + (Math.ceil(Math.random() * 2 - 1.5));
                let newPosY = _lastPositions[k].top + Math.ceil(Math.random() * 4);
                let snowFlake = _snowFlakes[k];
                if (newPosY > 113) {
                    newPosY = -1;
                    snowFlake.classList.add('no-animate');
                } else {
                    snowFlake.classList.remove('no-animate');
                }
                _lastPositions[k] = {
                    left: newPosX,
                    top: newPosY
                }

            })(i);
        }
        _refreshSnowFlakes();
    };

    const _refreshSnowFlakes = function () {
        for (let i = 0; i < _lastPositions.length; i++) {
            (function (k) {
                const snowFlake = _snowFlakes[k];
                const newPos = _lastPositions[k];
                snowFlake.style.top = newPos.top + '%';
                snowFlake.style.left = newPos.left + '%';
            })(i);
        }
    };

    const _letItSnow = function () {
        interval = setInterval(function () {
            _snowingTurn();
        }, 500);
    };

    self.settings = {};

    const refreshSettings = function () {
        const optionsKeys = Object.keys(options);
        Object.keys(defaults).forEach(function (key) {
            self.settings[key] = optionsKeys.indexOf(key) > -1 ? options[key] : defaults[key];
        });
    };

    self.clear = function () {
        _lastPositions = [];
        const wrapper = self.elem.querySelector('.snowflakes-wrapper');
        wrapper && wrapper.remove();
        interval && clearInterval(interval);
    };

    self.init = function () {
        refreshSettings();
        self.elem = self.settings.elem;
        self.clear();
        generateSnowflakes();
        _letItSnow();
    };

    const generateSnowflakes = function () {
        refreshSettings();
        const wrapper = document.createElement('div');
        wrapper.classList.add('snowflakes-wrapper');
        _lastPositions = [];
        for (let i = 0; i < self.settings.quantity; i++) {
            (function () {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                self.settings.snowFlakeClass && snowflake.classList.add(self.settings.snowFlakeClass);
                const posX = Math.random() * 100;
                const posY = Math.random() * 104 - 4;
                const size = Math.ceil(Math.random() * 7) + 2;
                _lastPositions.push({
                    top: posY,
                    left: posX
                });
                snowflake.style.height = size + 'px';
                snowflake.style.width = size + 'px';
                wrapper.appendChild(snowflake);
            })();
        }
        self.elem.appendChild(wrapper);
        _snowFlakes = self.elem.querySelectorAll('.snowflake');
        _refreshSnowFlakes();
    };
    self.stop = function () {
        clearInterval(interval);
    };

    self.init();

    return self;
}
(function() {
    const kek = new GenerateSnow({
        elem: document.getElementById('snow-section'),
        quantity: 60,
        snowFlakeClass: 'snowflake-main',
    });
})()
