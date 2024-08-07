const person = {
	name: 'Monkey D. Luffy',
	age: 21,
	occupation: 'Captain',
	email: "mdluffy56@onepiece.org",
	isStudent: false
};

function getObjectInformation(person){

    let infoArray = [];

    for(let key in person){
        infoArray.push("Key: " + key + ", Value: " + person[key]);
    }
    return infoArray;
}

// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		getObjectInformation
	};
}