const checkboxGroup = document.querySelectorAll('input[type="checkbox"]');
const sentencesDisplay = document.getElementById("sentences");
const shortestDisplay = document.getElementById("shortest");
const longestDisplay = document.getElementById("longest");
const displayInfoBtn = document.getElementById('displayInfo')

document.addEventListener('DOMContentLoaded', () => {
	displayInfoBtn.addEventListener('click', () => {
		const selectedFruits = Array.from(checkboxGroup)
			.filter(checkbox => checkbox.checked)
			.map(checkbox => checkbox.value);
		console.log(selectedFruits);
		const result = typeof displayFruitsInformation === 'undefined' ? "Function not implemented" : displayFruitsInformation(selectedFruits);
		console.log(result);
		sentencesDisplay.innerHTML = `<p>${result.fruitSentences.join('</p><p>')}</p>`;
		shortestDisplay.innerText = `Shortest fruit: ${result.shortestFruit}`;
		longestDisplay.innerText = `Longest fruit: ${result.longestFruit}`;
	})
})