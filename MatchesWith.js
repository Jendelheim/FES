//homeInput & awayInput motsvarar de utvalda lagens arrayposition
//var homeInputToSplit = "9	 Everton	9	3	4	2	12	11	+1	13	1.44	33	44"; 
//var awayInputToSplit = "11	 Stoke City	9	3	3	3	9	10	-1	12	1.33	22	33"; 

var homeInput = homeInputToSplit.split(/\s+/);
var awayInput = awayInputToSplit.split(/\s+/); 

var correctHomeCsIndex, 
	correctHomeFtsIndex, 
	correctAwayCsIndex,
	correctAwayFtsIndex;
console.log("Home input");
console.log(homeInput);
console.log("Away input");
console.log(awayInput); 

if (homeInput.length === 14) {
	correctHomeCsIndex = Number(homeInput[12]);
	correctHomeFtsIndex = Number(homeInput[13]);
	} 
	else {
		correctHomeCsIndex = Number(homeInput[11]);
		correctHomeFtsIndex = Number(homeInput[12]); 
	}


if (awayInput.length === 14) {
	correctAwayCsIndex = Number(awayInput[12]);
	correctAwayFtsIndex = Number(awayInput[13]); 
}
	else {
		correctAwayCsIndex = Number(awayInput[11]);
		correctAwayFtsIndex = Number(awayInput[12]);  
	}


console.log("Correct home clean sheet");
console.log(correctHomeCsIndex); 
console.log("Correct home fail to score");
console.log(correctHomeFtsIndex);
console.log("Correct away clean sheet");
console.log(correctAwayCsIndex);
console.log("Correct away fail to score");
console.log(correctAwayFtsIndex); 

var homePos = (correctHomeCsIndex+correctAwayFtsIndex)/2, 
	awayPos = (correctAwayCsIndex+correctHomeFtsIndex)/2; 

console.log("Home possibility to clean sheet");

console.log(homePos);

console.log("Away possibility to clean sheet");

console.log(awayPos); 