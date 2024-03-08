const moji = "BCDFGHJKLMNPQRSTVWXYZ";

function convert(str, shift) {
	let result = "";
	for (const char of str) {

		if (char == 'A' || char == "I" || char == "U" || char == "E" || char == "O") {
			result += char;
			continue;
		}
		const index = moji.indexOf(char);
		console.log(index);
		result += moji[(index + shift) % moji.length];
	}
	return result;
}

document.querySelector("#input").onchange = () => {
	const value = document.querySelector("#input").value;
	const converted = convert(value, 1);
	document.querySelector("#output").innerHTML = converted;
}