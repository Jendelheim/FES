

//var homeLast6ToSplit = "2 3 3 1 1 3";
//var	awayLast6ToSplit = "3 3 3 3 1 3";

numElements = 6

function sumToVar(array){
        var sum = 0;
        for (var i = 0; i < numElements; i++){
                sum += Number(array[i]);
        }
        return sum;
}

homeLast6 = homeLast6ToSplit.split(" ");
awayLast6 = awayLast6ToSplit.split(" "); 

homeArrayLength = sumToVar(homeLast6);
awayArrayLength = sumToVar(awayLast6);

console.log("Last six home");
console.log(homeLast6); 
console.log("Last six away");
console.log(awayLast6); 

console.log("Home points");
console.log(homeArrayLength + "/18");
console.log("Away points");
console.log(awayArrayLength + "/18");


if (homeArrayLength > -1 && homeArrayLength < 4){
        console.log("HomeStatus 1");
} else if (homeArrayLength > 3 && homeArrayLength < 7) {
        console.log("HomeStatus 2");
} else if (homeArrayLength > 6 && homeArrayLength < 10) {
        console.log("HomeStatus 3");
} else if (homeArrayLength > 9 && homeArrayLength < 14) {
        console.log("HomeStatus 4");
} else  {
		console.log("HomeStatus 5");
}

if (awayArrayLength > -1 && awayArrayLength < 4){
			console.log("AwayStatus 1");
} else if (awayArrayLength > 3 && awayArrayLength < 7)
		{console.log("AwayStatus 2");
} else if (awayArrayLength > 6 && awayArrayLength < 10)
		{console.log("AwayStatus 3");
} else if (awayArrayLength > 9 && awayArrayLength < 14)
		{console.log("AwayStatus 4");
} else {
		console.log("AwayStatus 5");
}


homeFormPotential = homeArrayLength - awayArrayLength; 
awayFormPotential = awayArrayLength - homeArrayLength; 

console.log("Form advantage home");
console.log(homeFormPotential);
console.log("Form advantage away");
console.log(awayFormPotential); 

console.log("Recommended advantage");
if (homeFormPotential > awayFormPotential){
	console.log("Home form advantage " + homeFormPotential);
}
	else {
		console.log("Away form advantage " + awayFormPotential);
	}
