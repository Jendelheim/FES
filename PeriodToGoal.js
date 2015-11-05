var numElements = 6;
 
function sumToVar(array){
        var sum = 0;
        for (var i = 0; i < numElements; i++){
                sum += array[i];
        }
        return sum;
}
 
function calculatePotential(a1, t1, a2, t2){
        var destinationArray = [];
        for(var i = 0; i < numElements; i++){
                destinationArray[i] = (a1[i] / t1) + (a2[i] / t2);
        }
        return destinationArray;
}
 
function betValue(a1, a2) {
        var returnArray = [];
        for(var i = 0; i < numElements; i++){
                returnArray[i] = (a1[i] + a2[i]) / 2
        }
        return returnArray;
}
 
function AppendToDom (data) {
        var pElement = document.createElement("p");
        pElement.innerHTML = data;
        document.body.appendChild(pElement);
        }

//var getHomeScored = "5 - 2 1 - 1 3 - 2 2 - 1 3 - 1 5 - 1",
//        getHomeConceded = getHomeScored,
//        getAwayScored = "1 - 3 0 - 1 2 - 2 1 - 2 3 - 3 2 - 2",
//        getAwayConceded = getAwayScored,
//        getHomeScoredAtHome = "1 - 1 0 - 0 2 - 0 1 - 0 0 - 1 3 - 0",
//        getHomeConcededAtHome = getHomeScoredAtHome,
//        getAwayScoredAtAway = "0 - 2 0 - 1 1 - 0 0 - 2 1 - 2 1 - 2",
//        getAwayConcededAtAway = getAwayScoredAtAway;
 

 
//Program
 
var homeScored = [],
        homeConceded = [],
        awayScored = [],
        awayConceded = [],
        homeScoredAtHome = [],
        homeConcededAtHome = [],
        awayScoredAtAway = [],
        awayConcededAtAway = [];
 
var totalHomeScored = 0,
        totalHomeConceded = 0,
        totalAwayScored = 0,
        totalAwayConceded = 0,
        totalHomeScoredAtHome = 0,
        totalHomeConcededAtHome = 0,
        totalAwayScoredAtAway = 0,
        totalAwayConcededAtAway = 0,
        homePotential = [],
        awayPotential = [];
 
 
 
var homeScoredSplit = getHomeScored.split(" ");
var homeConcededSplit = getHomeConceded.split(" ");
var awayScoredSplit = getAwayScored.split(" ");
var awayConcededSplit = getAwayConceded.split(" ");
var homeScoredAtHomeSplit = getHomeScoredAtHome.split(" ");
var homeConcededAtHomeSplit = getHomeConcededAtHome.split(" ");
var awayScoredAtAwaySplit = getAwayScoredAtAway.split(" ");
var awayConcededAtAwaySplit = getAwayScoredAtAway.split(" ");
     
for(var i = 0; i < numElements; i++){
        homeScored[i] = parseInt(homeScoredSplit[i*3]);
        homeConceded[i] = parseInt(homeConcededSplit[2 + (i*3)]);
        awayScored[i] = parseInt(awayScoredSplit[i*3]);
        awayConceded[i] = parseInt(awayConcededSplit[2 + (i*3)]);
        homeScoredAtHome[i] = parseInt(homeScoredAtHomeSplit[i*3]);
        homeConcededAtHome[i] = parseInt(homeConcededAtHomeSplit[2 + (i*3)]);
        awayScoredAtAway[i] = parseInt(awayScoredAtAwaySplit[i*3]);
        awayConcededAtAway[i]= parseInt(awayConcededAtAwaySplit[2 + (i*3)]);
}
 
totalHomeScored = sumToVar(homeScored);
totalHomeConceded = sumToVar(homeConceded);
totalAwayScored = sumToVar(awayScored);
totalAwayConceded = sumToVar(awayConceded);
totalHomeScoredAtHome = sumToVar(homeScoredAtHome);
totalHomeConcededAtHome = sumToVar(homeConcededAtHome);
totalAwayScoredAtAway = sumToVar(awayScoredAtAway);
totalAwayConcededAtAway = sumToVar(awayConcededAtAway);
 
 
homePotential = calculatePotential(homeScored, totalHomeScored, awayConceded, totalAwayConceded);
awayPotential = calculatePotential(awayScored, totalAwayScored, homeConceded, totalHomeConceded);
 
specificHomePotential = calculatePotential(homeScoredAtHome, totalHomeScoredAtHome, awayConcededAtAway, totalAwayConcededAtAway);
specificAwayPotential = calculatePotential(awayScoredAtAway, totalAwayScoredAtAway, homeConcededAtHome, totalHomeConcededAtHome);
 
var betVal = betValue(homePotential, awayPotential);
var SpecificBetValue = betValue(specificHomePotential, specificAwayPotential);
 
 
 
 
console.log("home potential");
console.log(homePotential.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));


console.log("away Potential");
console.log(awayPotential.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));

 
console.log("bet value");
console.log(betVal.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));
 
 
console.log("Specific Home Potential");
console.log(specificHomePotential.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));
console.log("Specific Away Potential");
console.log(specificAwayPotential.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));
 
 
console.log("Specific Bet Value");
console.log(SpecificBetValue.map(function (val) {
        return parseFloat((val * 100).toFixed(2));
}));
 
 
