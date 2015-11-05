function appendToDom (data) {
        var pElement = document.createElement("p");
        pElement.innerHTML = data;
        document.body.appendChild(pElement);
        }


//var     OverOneFive = 1.5,
//        UnderOneFive = 2.5,
//        OverTwoFive = 1.75, 
//        UnderTwoFive = 2.25,
//        OverThreeFive = 2.5,
//        UnderThreeFive = 1.5;

var OneFiveValue = UnderOneFive - OverOneFive;
var TwoFiveValue = UnderTwoFive - OverTwoFive;
var ThreeFiveValue = UnderThreeFive - OverThreeFive;  
 
if (OneFiveValue > 0) {
        console.log("Over 1.5 probability true       " + OneFiveValue)
        }
        else {
                console.log("Over 1.5 probability false      " + OneFiveValue)
        };

if (TwoFiveValue > 0) {
        console.log("Over 2.5 probability true       " + TwoFiveValue)
        }
        else {
                console.log("Over 2.5 probability false      " + TwoFiveValue)
        };      
 
if (ThreeFiveValue > 0) {
        console.log("Over 3.5 probability true       " + ThreeFiveValue)
        }
        else {
                console.log("Over 3.5 probability false      " + ThreeFiveValue)
        };


//      var     homeTeamPaste = "2.60   90     80     50     10     10";
//      var     awayTeamPaste = "2.10   100    60     30     20     0"; 

var     homeTeamSplitted = [],
        awayTeamSplitted = [];

homeTeamSplitted = homeTeamPaste.split(/\s+/);
awayTeamSplitted = awayTeamPaste.split(/\s+/); 

console.log("Home team split");
console.log(homeTeamSplitted);
console.log("Away team split"); 
console.log(awayTeamSplitted); 

function overBetValue(a1, a2) {
        var returnArray = [];
        for(var i = 0; i < 6; i++){
                returnArray[i] = (Number(a1[i]) + Number(a2[i])) / 2;
        }
        return returnArray;
}

var overValue = overBetValue(homeTeamSplitted,awayTeamSplitted);

console.log("Average goals per game and percentage over 0.5, 1.5, 2.5, 3.5, 4.5");
for(var i = 0; i < 6; i++)
        {
        console.log(overValue[i])};
