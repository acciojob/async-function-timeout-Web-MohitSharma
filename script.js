let inputText = document.getElementById("text");
let delay = document.getElementById("delay");
let output = document.getElementById("output");
let btn = document.getElementById("btn");

async function provideDelay() {

    await new Promise((resolve) => {
        setTimeout(resolve, delay.value);
    });

    output.innerHTML = inputText.value;
}

btn.addEventListener("click", provideDelay);