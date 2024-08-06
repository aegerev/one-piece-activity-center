function displayInfo(item) {
	const words = item.split(", ").map((item) => item.split(": "));
	for(let i = 0; i < words.length; i++) {
		for(let x = 0; x < words[i].length; x++)
			if(x % 2 !== 0) {
				words[i][x] = `<span class="paragraph">${words[i][x]}</span>`;
			}
	}
	return `<p>${words.map((item) => item.join(": ")).join(", ")}</p>`
}

document.addEventListener('DOMContentLoaded', () => {
	const objectInfoContainer = document.getElementById('objectInfo');
	const infoText = typeof getObjectInformation === "undefined" ? "<p class=\"paragraph\">The function 'getObjectInformation' is not defined yet.</p>" : (typeof person === 'undefined' ? "<p class=\"paragraph\">The object 'person' is not defined yet.</p>" : getObjectInformation(person).map(info => displayInfo(info)).join(''));
	objectInfoContainer.innerHTML = infoText;
});