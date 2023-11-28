const numCounter = ()=> {
    let setCounterEl = document.getElementById("counter");
    setCounterEl.innerHTML = ++initialCounter+"+";
    if (initialCounter === 250) {
        clearInterval(startCounter);
    }
}
let startCounter = setInterval(numCounter);
let initialCounter = 0;