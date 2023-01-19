const debounce = (func, delay) => {
    let inDebounce
    return function () {
        const context = this
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}
const debouncedArrowUpKeyUp = debounce((index) => { simulateKey('32', 'up', index) }, 50);
const debouncedArrowDownKeyUp = debounce((index) => { simulateKey('40', 'up', index) }, 150);

function simulateKey(keyCode, type, index) {
    var evtName = (typeof (type) === "string") ? "key" + type : "keydown";

    var event = new Event(evtName, { bubbles: true, cancelable: false });
    event.keyCode = keyCode;
    event.trexIndex = index;

    document.dispatchEvent(event);
}

function jump(index) {
    simulateKey('32', 'down', index)
    debouncedArrowUpKeyUp(index);
}

function duck(index) {
    simulateKey('40', 'down', index)
    debouncedArrowDownKeyUp(index);
}

function getRunnerInstance() {
    return Runner.instance_;
}

function createGame(count) {
    const event = new Event("startRunner")
    event.populationCount = count;
    document.dispatchEvent(event);
}


function randomPlay(count) {
    createGame(count)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    for (let index = 0; index < count; index++) {
        interval = setInterval(() => {
            if (Runner.instance_.crashed) {
                clearInterval(interval)
                return
            }
            let rand = getRandomInt(100)
            if (rand < 5) {
                duck(index);
            } else if (rand < 60) {
                console.log("Nothing")
                // nothing
            } else {
                jump(index)
            }
        }, 50 + getRandomInt(20))
    }
}
