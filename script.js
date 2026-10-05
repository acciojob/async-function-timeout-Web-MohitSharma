//your JS code here. If required.
let inputText = document.getElementById("text").value;
let delay = document.getElementById("delay").value;

async function provideDelay(){
	let text = await setTimeout(()=>{
		output.innerHTML = inputText
	},delay)
}

